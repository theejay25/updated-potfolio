import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-5xl font-extrabold">Page not found</h1>
      <p className="mt-3 text-muted">That project or page doesn&apos;t exist.</p>
      <Link href="/" className="mt-8 rounded-full bg-accent px-6 py-3 font-medium text-white">
        Back home
      </Link>
    </section>
  );
}
