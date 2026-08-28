"use client";

import { useState } from "react";
import Link from "next/link";
import { Wordmark } from "./wordmark";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/services", label: "Services" },
  { href: "/#process", label: "How we work" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-bg/[0.85] backdrop-blur-[10px] border-b border-border transition-colors">
      <div className="max-w-[1160px] mx-auto px-8 h-[76px] flex items-center justify-between">
        <Link
          href="/"
          className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue rounded"
          aria-label="Edecode home"
        >
          <Wordmark className="text-[20px]" />
        </Link>

        <div className="flex items-center gap-7">
          <ul className="hidden min-[821px]:flex items-center gap-9">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-text-muted hover:text-text transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue rounded"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <Link
            href="/contact"
            className="hidden min-[821px]:inline-flex bg-blue text-btn-text px-5 py-2.5 rounded-md text-sm font-medium transition-colors hover:bg-blue/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
          >
            Book a call
          </Link>

          <button
            type="button"
            className="min-[821px]:hidden flex flex-col justify-center gap-1.5 w-9 h-9 rounded-lg border border-border bg-surface items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block w-4 h-0.5 bg-text transition-transform ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
              aria-hidden="true"
            />
            <span
              className={`block w-4 h-0.5 bg-text transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
              aria-hidden="true"
            />
            <span
              className={`block w-4 h-0.5 bg-text transition-transform ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="min-[821px]:hidden border-t border-border bg-surface px-8 py-5"
        >
          <ul className="flex flex-col gap-4" aria-label="Primary navigation">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-text-muted hover:text-text transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue rounded"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-5 inline-flex bg-blue text-btn-text px-5 py-2.5 rounded-md text-sm font-medium transition-colors hover:bg-blue/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
            onClick={() => setMobileOpen(false)}
          >
            Book a call
          </Link>
        </div>
      )}
    </nav>
  );
}
