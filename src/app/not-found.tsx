import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="!text-7xl !font-bold text-accent mb-4">404</h1>
      <p className="text-white/60 mb-8">
        This page doesn&apos;t exist — but the rest of the portfolio does.
      </p>
      <Link
        href="/"
        className="px-8 py-3 bg-accent text-black text-sm font-semibold rounded-full hover:bg-white transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
