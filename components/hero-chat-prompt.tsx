"use client";

import { useState } from "react";
import { ChatDemo } from "./chat-demo";

export function HeroChatPrompt() {
  const [expanded, setExpanded] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [sendOnOpen, setSendOnOpen] = useState(false);
  const [chatKey, setChatKey] = useState(0);

  function open(send = false) {
    setSendOnOpen(send && !!prompt.trim());
    setExpanded(true);
  }

  function close() {
    setExpanded(false);
    setPrompt("");
    setSendOnOpen(false);
    setChatKey((key) => key + 1);
  }

  return (
    <div className="max-w-[880px] mt-7">
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-[350ms] ease-out ${
          expanded ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"
        }`}
        aria-hidden={expanded}
      >
        <div className="overflow-hidden">
          <div className="relative">
            <input
              type="text"
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              onFocus={() => open(false)}
              onClick={() => open(false)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  open(true);
                }
              }}
              placeholder="$ ask edecode anything"
              tabIndex={expanded ? -1 : 0}
              className="w-full bg-surface border border-border rounded-xl px-5 py-4 pr-10 font-mono text-sm text-text placeholder:text-text-muted transition-colors hover:border-blue focus:border-blue focus-visible:outline-none"
              aria-label="Ask Edecode anything"
            />
            {!prompt && (
              <span
                className="terminal-cursor absolute left-[calc(1.25rem+22ch)] top-1/2 h-[18px] w-[2px] -translate-y-1/2 bg-blue pointer-events-none"
                aria-hidden="true"
              />
            )}
          </div>
        </div>
      </div>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-[350ms] ease-out ${
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!expanded}
      >
        <div className="overflow-hidden">
          {expanded && (
            <ChatDemo
              key={chatKey}
              initialMessage={prompt}
              sendInitialMessage={sendOnOpen}
              onClose={close}
              autoFocus={!sendOnOpen}
            />
          )}
        </div>
      </div>
    </div>
  );
}
