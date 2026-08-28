import { ServiceLayout } from "@/components/service-layout";
import { ChatDemo } from "@/components/chat-demo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Automation",
  description:
    "Voice agents, chatbots, and AI tools built for how your business actually runs.",
};

export default function AIPage() {
  return (
    <ServiceLayout
      eyebrow="01 — AI & Automation"
      headline="Voice agents, chatbots, and AI tools built for how your business actually runs."
      subhead="We don't sell a single AI product. We build the specific system your operation needs — whether that's a voice agent handling calls, a chatbot that actually resolves issues, or a custom tool for a workflow nobody else has automated yet."
      builds={[
        {
          title: "Voice agents",
          desc: "AI phone and voice agents that handle real calls — booking, support, screening, follow-ups. Built on real experience with production voice AI, including real-time bidirectional voice translation across 12 languages for a live interview platform — so we're not learning speech pipelines on your project, we're applying what's already been proven to work.",
        },
        {
          title: "Chatbots & conversational AI",
          desc: "Chat and multilingual receptionist systems trained on your actual product, policies, and tone — including retrieval-based (RAG) search so answers come from your real data, not a generic model's guesswork.",
        },
        {
          title: "Custom AI tools",
          desc: "When the problem doesn't fit an off-the-shelf category — document processing, semantic search, automated scoring, or an internal tool for a workflow nobody else has automated yet.",
        },
      ]}
      trust="Built on hands-on experience shipping AI systems for platforms used in interview processing, national employment matching, and SME customer service — across Pakistan, the UK, and Malaysia."
      demo={<ChatDemo />}
      sections={[
        {
          title: "How engagements work",
          content: (
            <p>
              Every project starts with the same question: what&apos;s actually
              slowing you down? Some builds are a focused two-week sprint — a
              single chatbot, a single automation. Others are ongoing, evolving
              as the tool gets used and the requirements sharpen. We scope
              timeline and cost after that first conversation, not before.
            </p>
          ),
        },
      ]}
      ctaText="Tell us the problem →"
    />
  );
}
