import type { ExecutionContext, Fetcher } from "@cloudflare/workers-types";

interface Env {
  GROQ_API_KEY: string;
  ASSETS: Fetcher;
}

const SYSTEM_PROMPT =
  "You are a demo assistant on Edecode's website, showing what Edecode can build. You ONLY answer questions about: Edecode's services (AI & Automation, Custom Software, Web & Mobile, Integrations), how Edecode's process works (Elicitate, Design, Code), and general guidance on whether AI is a good fit for a described business problem. If asked anything outside this scope — general knowledge, coding help, personal questions, or anything unrelated to Edecode — politely decline and say something like 'That's outside what this demo covers — for anything else, the team would love to talk, use the Start a project button.' Keep responses under 80 words. Never claim to be a real employee or imply this is a live support channel — you are a demo assistant.";

const HOUR_MS = 60 * 60 * 1000;
const RATE_LIMIT = 20;

const requestTimestamps = new Map<string, number[]>();

function getClientIP(request: Request): string {
  return (
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for") ??
    "unknown"
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = requestTimestamps.get(ip) ?? [];
  const window = timestamps.filter((t) => now - t < HOUR_MS);
  requestTimestamps.set(ip, window);
  return window.length >= RATE_LIMIT;
}

function recordRequest(ip: string): void {
  const now = Date.now();
  const window = requestTimestamps.get(ip) ?? [];
  window.push(now);
  requestTimestamps.set(ip, window);
}

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

async function handleChat(request: Request, env: Env): Promise<Response> {
  const ip = getClientIP(request);

  if (isRateLimited(ip)) {
    return jsonResponse(
      { error: "Rate limit exceeded — try again in an hour." },
      429
    );
  }

  let payload: { messages?: { role: string; content: string }[] };
  try {
    payload = (await request.json()) as typeof payload;
  } catch {
    return jsonResponse({ error: "Invalid JSON body." }, 400);
  }

  if (!Array.isArray(payload.messages) || payload.messages.length === 0) {
    return jsonResponse({ error: "Missing messages array." }, 400);
  }

  recordRequest(ip);

  const apiKey = env.GROQ_API_KEY;
  if (!apiKey) {
    return jsonResponse(
      { error: "Groq API key not configured." },
      500
    );
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const res = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-20b",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...payload.messages,
          ],
          max_tokens: 150,
          temperature: 0.7,
        }),
        signal: controller.signal,
      }
    );

    clearTimeout(timeout);

    if (!res.ok) {
      const text = await res.text();
      console.error("Groq API error:", res.status, text);
      return jsonResponse(
        { error: "Something went wrong — try again." },
        502
      );
    }

    const data = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const content = data.choices?.[0]?.message?.content?.trim() ?? "";

    if (!content) {
      return jsonResponse({ error: "Something went wrong — try again." }, 502);
    }

    return jsonResponse({ role: "assistant", content });
  } catch (err) {
    clearTimeout(timeout);
    console.error("Groq request failed:", err);
    return jsonResponse({ error: "Something went wrong — try again." }, 502);
  }
}

export default {
  async fetch(
    request: Request,
    env: Env,
    _ctx: ExecutionContext
  ): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/chat" && request.method === "POST") {
      return handleChat(request, env);
    }

    if (url.pathname === "/api/chat") {
      return jsonResponse({ error: "Method not allowed." }, 405);
    }

    if (url.pathname === "/api/debug-env" && request.method === "GET") {
      return jsonResponse({ groqKeyPresent: !!env.GROQ_API_KEY });
    }

    return env.ASSETS.fetch(request);
  },
};
