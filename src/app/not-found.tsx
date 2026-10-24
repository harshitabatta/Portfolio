import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16 text-foreground">
      <section className="w-full max-w-2xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Harshita Batta · Software Engineer
        </p>
        <h1 className="text-8xl font-bold tracking-tight sm:text-9xl">404</h1>
        <h2 className="mt-6 text-2xl font-semibold sm:text-3xl">
          This page doesn&apos;t exist.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground sm:text-lg">
          Looks like this route took a wrong turn. Head back home or explore my
          resume and technical work.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Back to Home
          </Link>
          <a
            href="/Harshita_Batta_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            View Resume
          </a>
        </div>
      </section>
    </main>
  );
}
