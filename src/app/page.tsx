import Link from "next/link";

const experiences = [
  {
    company: "Jio Haptik Technologies Limited",
    role: "Software Engineering Intern",
    period: "Jan 2026 — Present",
    location: "Mumbai, India",
    description: "Developing and optimizing backend services using Python and Django for scalable enterprise-grade applications supporting production workflows and customer-facing features.",
    technologies: ["Python", "Django", "REST APIs", "MySQL", "Redis", "Elasticsearch", "Docker", "CI/CD"],
  },
  {
    company: "E&ICT Academy, IIT Kanpur",
    role: "Data Analytics & AI Intern",
    period: "Jun 2025 — Aug 2025",
    location: "Kanpur, India",
    description: "Completed a six-week internship and project work in Data Analytics using AI.",
    technologies: ["Data Analytics", "AI"],
  },
];

const projects = [
  {
    number: "01",
    title: "Abnormal EEG Classification",
    type: "Research / Final-year project",
    description: "Two-year research collaboration with Command Hospital, Air Force Bangalore, focused on automated abnormal EEG classification using deep learning and signal-processing techniques.",
    details: [
      "Built EEGNet-based pipelines for normal vs abnormal EEG detection using the TUH EEG Corpus.",
      "Developed a multi-input framework combining raw EEG with handcrafted spectral and non-linear features.",
      "Implemented MNE-Python preprocessing, memory-efficient incremental training, ensemble prediction, and a Streamlit visualization interface.",
    ],
    technologies: ["Python", "EEGNet", "MNE-Python", "Deep Learning", "Signal Processing", "Streamlit"],
    linkLabel: "GitHub ↗",
    link: "https://github.com/harshitabatta",
  },
  {
    number: "02",
    title: "Fault-Tolerant Distributed 3D Printer Orchestration System",
    type: "Distributed systems",
    description: "Engineered a distributed 3D printer management platform implementing the Raft consensus algorithm for fault-tolerant coordination across nodes.",
    details: [
      "Designed backend services to manage printers, filament inventory, and print job orchestration using REST APIs.",
      "Implemented leader election, replicated log handling, and consistency validation mechanisms to improve distributed system reliability.",
      "Integrated Firebase persistence to maintain synchronized state and improve fault recovery.",
    ],
    technologies: ["Python", "Firebase", "REST APIs", "Raft", "Distributed Systems"],
    linkLabel: "GitHub ↗",
    link: "https://github.com/harshitabatta",
  },
  {
    number: "03",
    title: "LLM-based Interview Intelligence Platform",
    type: "AI / NLP",
    description: "Built an AI-driven mock interview platform with personalized question generation and real-time response analysis.",
    details: [
      "Implemented NLP preprocessing pipelines, Retrieval-Augmented Generation (RAG), and LoRA-based optimization techniques.",
      "Achieved 93% retrieval accuracy and 91.8% voice input accuracy during testing.",
      "Improved response evaluation quality through semantic analysis and contextual ranking mechanisms.",
    ],
    technologies: ["Python", "NLP", "RAG", "LoRA", "HTML", "CSS"],
    linkLabel: "GitHub ↗",
    link: "https://github.com/harshitabatta",
  },
  {
    number: "04",
    title: "Real-Time Gesture-Controlled Assistive Robotics Simulation",
    type: "Computer vision / Simulation",
    description: "Developed a gesture-controlled robotic arm simulation for assistive cooking operations, including stirring, pouring, and flipping.",
    details: [
      "Integrated MediaPipe-based real-time hand tracking with inverse kinematics for robotic motion control.",
      "Simulated realistic robotic interactions using PyBullet physics environments.",
      "Improved gesture recognition responsiveness and interaction accuracy for real-time control flows.",
    ],
    technologies: ["Python", "MediaPipe", "PyBullet"],
    linkLabel: "GitHub ↗",
    link: "https://github.com/harshitabatta",
  },
];

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

        <section id="top" className="flex min-h-[72vh] items-center py-20 lg:py-24">
          <div className="max-w-5xl">
            <p className="mb-6 font-mono text-sm uppercase tracking-[0.18em] text-accent">Software Engineer</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-[5rem]">I build backend systems and production software.</h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">Backend engineering, distributed systems, and applied AI — building reliable software from APIs to production infrastructure.</p>
            <div className="mt-10 flex flex-wrap gap-3 text-sm">
              <a href="#experience" className="rounded-full bg-accent px-5 py-2.5 font-medium text-white transition-colors hover:bg-accent-strong">View experience →</a>
              <a href="/Harshita_Batta_Resume.pdf" className="rounded-full border border-line px-5 py-2.5 transition-colors hover:border-accent hover:text-accent">Resume ↗</a>
              <a href="https://github.com/harshitabatta" target="_blank" rel="noreferrer" className="rounded-full border border-line px-5 py-2.5 transition-colors hover:border-accent hover:text-accent">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/harshita-batta/" target="_blank" rel="noreferrer" className="rounded-full border border-line px-5 py-2.5 transition-colors hover:border-accent hover:text-accent">LinkedIn ↗</a>
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
                <div className="font-mono text-xs uppercase tracking-[0.12em] text-muted lg:pt-1"><p>{experience.period}</p><p className="mt-2 normal-case tracking-normal">{experience.location}</p></div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">{experience.company}</h2>
                  <p className="mt-2 text-lg">{experience.role}</p>
                  <p className="mt-5 max-w-3xl leading-7 text-muted">{experience.description}</p>
                  <div className="mt-5 flex max-w-3xl flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted">{experience.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
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
          <div className="mt-12 divide-y divide-line">
            {projects.map((project) => (
              <article key={project.number} className="grid gap-8 py-12 first:pt-0 lg:grid-cols-[80px_minmax(0,1fr)_auto]">
                <div className="font-mono text-sm text-accent">{project.number}</div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{project.type}</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">{project.title}</h2>
                  <p className="mt-4 max-w-3xl leading-7 text-muted">{project.description}</p>
                  <ul className="mt-5 max-w-3xl space-y-2 text-sm leading-6 text-muted">
                    {project.details.map((detail) => <li key={detail} className="flex gap-3"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" /><span>{detail}</span></li>)}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="self-start text-sm transition-colors hover:text-accent lg:pt-6">{project.linkLabel}</a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-line py-24">
          <div className="max-w-4xl">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-accent">03 / Contact</p>
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Let&apos;s talk.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">For software engineering opportunities, technical collaborations, or a conversation about the work above.</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <a href="https://www.linkedin.com/in/harshita-batta/" target="_blank" rel="noreferrer" className="rounded-full bg-accent px-5 py-2.5 font-medium text-white transition-colors hover:bg-accent-strong">LinkedIn ↗</a>
              <a href="https://github.com/harshitabatta" target="_blank" rel="noreferrer" className="rounded-full border border-line px-5 py-2.5 transition-colors hover:border-accent hover:text-accent">GitHub ↗</a>
            </div>
          </div>
        </section>
        <footer className="border-t border-line py-8 text-sm text-muted">© 2026 Harshita Batta</footer>
      </div>
    </main>
  );
}
