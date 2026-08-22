import Link from "next/link";

const experiences = [
  {
    company: "Haptik",
    role: "Software Engineer",
    previousRole: "Software Engineer Intern",
    period: "Jan 2026 — Present",
    location: "Mumbai, India",
    description:
      "Building and optimizing backend services for enterprise applications, with a focus on APIs, data, reliability, and production engineering.",
    technologies: ["Python", "Django", "REST APIs", "MySQL", "Redis", "Elasticsearch", "Docker", "CI/CD"],
  },
  {
    company: "E&ICT Academy, IIT Kanpur",
    role: "Data Analytics & AI Intern",
    period: "Jun 2025 — Aug 2025",
    location: "Kanpur, India",
    description:
      "Completed a six-week internship and project work in Data Analytics using AI.",
    technologies: ["Data Analytics", "AI"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[rgb(var(--background))] text-ink">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between border-b border-line pb-6">
          <Link href="#top" className="font-medium tracking-tight">
            HARSHITA BATTA
          </Link>
          <nav className="flex items-center gap-6 text-sm text-muted">
            <Link href="#experience" className="transition-colors hover:text-accent">Experience</Link>
            <Link href="#work" className="transition-colors hover:text-accent">Work</Link>
            <Link href="#contact" className="transition-colors hover:text-accent">Contact</Link>
          </nav>
        </header>

        <section id="top" className="flex min-h-[72vh] items-center py-20 lg:py-24">
          <div className="max-w-5xl">
            <p className="mb-6 font-mono text-sm uppercase tracking-[0.18em] text-accent">Software Engineer</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-[5rem]">
              I build backend systems and production software.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">
              Backend engineering, distributed systems, and applied AI — building reliable software from APIs to production infrastructure.
            </p>

            <div className="mt-10 flex flex-wrap gap-3 text-sm">
              <a href="#experience" className="rounded-full bg-accent px-5 py-2.5 font-medium text-white transition-colors hover:bg-accent-strong">
                View experience →
              </a>
              <a href="/Harshita_Batta_Resume.pdf" className="rounded-full border border-line px-5 py-2.5 transition-colors hover:border-accent hover:text-accent">
                Resume ↗
              </a>
              <a href="https://github.com/harshitabatta" target="_blank" rel="noreferrer" className="rounded-full border border-line px-5 py-2.5 transition-colors hover:border-accent hover:text-accent">
                GitHub ↗
              </a>
              <a href="https://www.linkedin.com/in/harshita-batta/" target="_blank" rel="noreferrer" className="rounded-full border border-line px-5 py-2.5 transition-colors hover:border-accent hover:text-accent">
                LinkedIn ↗
              </a>
            </div>
          </div>
        </section>

        <section id="experience" className="border-t border-line py-20">
          <div className="flex items-baseline justify-between gap-8">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-accent">01 / Experience</p>
            <span className="font-mono text-xs text-muted">Professional history</span>
          </div>

          <div className="mt-12 divide-y divide-line">
            {experiences.map((experience) => (
              <article key={`${experience.company}-${experience.role}`} className="grid gap-8 py-10 first:pt-0 lg:grid-cols-[180px_minmax(0,1fr)]">
                <div className="font-mono text-xs uppercase tracking-[0.12em] text-muted lg:pt-1">
                  <p>{experience.period}</p>
                  <p className="mt-2 normal-case tracking-normal">{experience.location}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">{experience.company}</h2>
                  <p className="mt-2 text-lg">{experience.role}</p>
                  {experience.previousRole && (
                    <p className="mt-1 text-sm text-muted">Previously · {experience.previousRole}</p>
                  )}
                  <p className="mt-5 max-w-3xl leading-7 text-muted">{experience.description}</p>
                  <div className="mt-5 flex max-w-3xl flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted">
                    {experience.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="border-t border-line py-20">
          <div className="flex items-baseline justify-between gap-8">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-accent">02 / Selected Work</p>
            <span className="font-mono text-xs text-muted">Projects &amp; research</span>
          </div>
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
