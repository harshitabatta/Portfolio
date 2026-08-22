import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[rgb(var(--background))] text-ink">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between border-b border-line pb-6">
          <Link href="#top" className="font-medium tracking-tight">HARSHITA BATTA</Link>
          <nav className="flex items-center gap-6 text-sm text-muted">
            <Link href="#experience" className="transition-colors hover:text-accent">Experience</Link>
            <Link href="#work" className="transition-colors hover:text-accent">Work</Link>
            <Link href="#contact" className="transition-colors hover:text-accent">Contact</Link>
          </nav>
        </header>

        <section id="top" className="flex min-h-[70vh] items-center py-24">
          <div className="max-w-3xl">
            <p className="mb-6 font-mono text-sm uppercase tracking-[0.18em] text-accent">Software Engineer</p>
            <h1 className="text-5xl font-semibold tracking-[-0.045em] sm:text-7xl">Building backend systems and production software.</h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">Backend engineering · Distributed systems · AI</p>
            <div className="mt-10 flex flex-wrap gap-3 text-sm">
              <a href="#experience" className="rounded-full bg-accent px-5 py-2.5 font-medium text-white transition-colors hover:bg-accent-strong">View experience</a>
              <a href="https://github.com/harshitabatta" target="_blank" rel="noreferrer" className="rounded-full border border-line px-5 py-2.5 transition-colors hover:border-accent hover:text-accent">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/harshita-batta/" target="_blank" rel="noreferrer" className="rounded-full border border-line px-5 py-2.5 transition-colors hover:border-accent hover:text-accent">LinkedIn ↗</a>
            </div>
          </div>
        </section>

        <section id="experience" className="border-t border-line py-20">
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-accent">01 / Experience</p>
          <div className="mt-10">Experience section coming next.</div>
        </section>

        <section id="work" className="border-t border-line py-20">
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-accent">02 / Selected Work</p>
          <div className="mt-10">Selected projects coming next.</div>
        </section>

        <section id="contact" className="border-t border-line py-20">
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-accent">03 / Contact</p>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight">Let&apos;s build something.</h2>
        </section>

        <footer className="border-t border-line py-8 text-sm text-muted">© 2026 Harshita Batta</footer>
      </div>
    </main>
  );
}
