import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Real contact details haven't been finalized yet.",
  robots: "noindex, follow",
};

export default function ContactPage() {
  return (
    <section className="pt-[120px] pb-[100px] text-center">
      <div className="max-w-[1160px] mx-auto px-8">
        <span className="font-mono text-xs text-text-muted uppercase tracking-[0.08em] mb-4 block">
          Contact
        </span>
        <h1 className="text-[clamp(36px,4.8vw,64px)] font-medium font-heading mb-6">
          Coming soon
        </h1>
        <p className="text-text-muted max-w-[540px] mx-auto mb-8">
          Real contact details haven&apos;t been finalized. Check back shortly,
          or{" "}
          <Link
            href="/"
            className="text-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue rounded"
          >
            return home
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
