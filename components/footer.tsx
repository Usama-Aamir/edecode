import Link from "next/link";
import { Wordmark } from "./wordmark";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-auto">
      <div className="max-w-[1160px] mx-auto px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <Link
          href="/"
          className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue rounded"
          aria-label="Edecode home"
        >
          <span className="font-heading font-medium text-[15px] text-text-muted tracking-tight">
            <Wordmark className="text-[15px] text-text-muted" /> — AI Systems
            &amp; Custom Software
          </span>
        </Link>
        <div className="md:text-right">
          <p className="text-[13.5px] text-text-muted">
            © 2026 Edecode. All rights reserved.
          </p>
          <p className="text-[13.5px] text-text-muted mt-1">
            In affiliation with AI Software Solutions (AISS), Malaysia
          </p>
        </div>
      </div>
    </footer>
  );
}
