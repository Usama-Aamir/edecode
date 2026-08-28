import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pt-[120px] pb-[100px] text-center">
      <div className="max-w-[1160px] mx-auto px-8">
        <h1 className="text-[clamp(36px,4.8vw,64px)] font-medium font-heading mb-4">
          Page not found
        </h1>
        <p className="text-text-muted mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="bg-blue text-btn-text px-7 py-4 rounded-md font-medium text-[15px] inline-block transition-colors hover:bg-blue/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
        >
          Return home
        </Link>
      </div>
    </section>
  );
}
