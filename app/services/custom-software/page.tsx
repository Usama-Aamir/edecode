import { ServiceLayout } from "@/components/service-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software",
  description:
    "Software built around how your business actually operates.",
};

export default function CustomSoftwarePage() {
  return (
    <ServiceLayout
      eyebrow="02 — Custom Software"
      headline="Software built around how your business actually operates."
      subhead="Not a template with your logo on it. We build web platforms and internal tools shaped by your real workflow — using a modern, production-grade stack designed to scale without a rebuild in a year."
      builds={[
        {
          title: "SaaS platforms",
          desc: "Full-stack products built on React, Next.js, TypeScript, and Supabase — from first user to scaled infrastructure on Cloudflare. Built to handle real usage, not just a demo.",
        },
        {
          title: "Internal tools & dashboards",
          desc: "Purpose-built systems for the workflow your team actually has — replacing spreadsheets, disconnected tools, or manual processes with something that fits how you work.",
        },
        {
          title: "E-commerce & business platforms",
          desc: "Custom storefronts and business-management systems, from product and inventory management to performance and security — built to actually convert, not just look finished.",
        },
      ]}
      sections={[
        {
          title: "Our stack",
          content: (
            <p className="font-mono text-sm text-text">
              React · Next.js · TypeScript · Node.js · Supabase · PostgreSQL ·
              Cloudflare · Tailwind CSS
            </p>
          ),
        },
      ]}
      ctaText="Tell us what you're building →"
    />
  );
}
