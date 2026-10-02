import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="font-display text-7xl text-accent">404</p>
        <p className="mt-4 text-muted">This page does not exist.</p>
        <Link href="/" className="mt-8 inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper">
          Back to home
        </Link>
      </div>
    </main>
  );
}
