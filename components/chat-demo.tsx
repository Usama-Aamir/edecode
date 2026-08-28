"use client";

import { useState } from "react";
import Link from "next/link";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const DEMO_LIMIT = 8;

export function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi — I can answer questions about Edecode's services, process, or whether AI fits your business problem.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [userCount, setUserCount] = useState(0);

  const remaining = DEMO_LIMIT - userCount;
  const limitReached = remaining <= 0;

  async function sendMessage(e?: React.FormEvent) {
    e?.preventDefault();
    if (!input.trim() || loading || limitReached) return;

    const content = input.trim();
    const nextMessages: Message[] = [...messages, { role: "user", content }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setUserCount((c) => c + 1);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = (await res.json()) as { content?: string; error?: string };

      if (!res.ok || data.error) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.error ?? "Something went wrong — try again." },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.content ?? "Something went wrong — try again." },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Something went wrong — try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-surface border border-border rounded-[14px] p-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
        <div>
          <h3 className="font-heading font-semibold tracking-tight text-[24px] text-text mb-1.5">
            Try it — ask about what we build
          </h3>
          <p className="font-mono text-xs text-text-muted uppercase tracking-[0.06em]">
            A live demo, not a real support channel. Limited to {DEMO_LIMIT} messages.
          </p>
        </div>
        {limitReached ? null : (
          <span className="font-mono text-xs text-text-muted">
            {remaining} message{remaining === 1 ? "" : "s"} left
          </span>
        )}
      </div>

      <div className="h-[260px] overflow-y-auto space-y-3 mb-6 pr-1 scrollbar-thin">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] ${
              m.role === "user" ? "ml-auto" : "mr-auto"
            }`}
          >
            <div
              className={`inline-block px-4 py-3 text-[14.5px] leading-relaxed rounded-[12px] ${
                m.role === "user"
                  ? "bg-blue text-btn-text rounded-br-none"
                  : "bg-surface-2 text-text border border-border rounded-bl-none"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="mr-auto max-w-[85%]">
            <div className="inline-flex items-center gap-1.5 bg-surface-2 border border-border rounded-[12px] rounded-bl-none px-4 py-3">
              <span className="w-1.5 h-1.5 rounded-full bg-text-muted animate-pulse" />
              <span className="w-1.5 h-1.5 rounded-full bg-text-muted animate-pulse delay-100" />
              <span className="w-1.5 h-1.5 rounded-full bg-text-muted animate-pulse delay-200" />
            </div>
          </div>
        )}
      </div>

      {limitReached ? (
        <div className="border border-dashed border-border rounded-[12px] p-6 text-center">
          <p className="font-heading text-[18px] text-text mb-4">
            That&apos;s the demo limit — want to talk about a real project?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-blue text-btn-text px-7 py-4 rounded-md font-medium text-[15px] transition-colors hover:bg-blue/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
          >
            Start a project
          </Link>
        </div>
      ) : (
        <form onSubmit={sendMessage} className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) sendMessage();
            }}
            placeholder="Ask about AI, process, or fit for your problem..."
            className="flex-1 bg-bg border border-border rounded-md px-4 py-3 text-[14.5px] text-text placeholder:text-text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
            aria-label="Message"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="bg-blue text-btn-text px-5 py-3 rounded-md font-medium text-[14.5px] transition-colors hover:bg-blue/90 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
}
