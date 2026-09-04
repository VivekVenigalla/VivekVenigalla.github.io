export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-[88vh] max-w-5xl flex-col items-start justify-center px-6 py-24"
    >
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted">
        Math &amp; Computer Science · University of Georgia
      </p>
      <h1 className="gradient-text max-w-3xl text-5xl font-bold leading-tight sm:text-7xl">
        Vivek Venigalla
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
        I build things at the intersection of quantitative finance, physics
        simulation, and software — from a C++ backtesting engine to a
        gravitational N-body physics engine in Haskell.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-105"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          className="gradient-border rounded-full px-6 py-3 text-sm font-medium text-foreground transition-colors hover:text-accent-teal"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent-violet"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
