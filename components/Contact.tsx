const links = [
  {
    label: "Email",
    value: "vivekvenigalla.2008@gmail.com",
    href: "mailto:vivekvenigalla.2008@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/VivekVenigalla",
    href: "https://github.com/VivekVenigalla",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/vivekvenigalla",
    href: "https://www.linkedin.com/in/vivekvenigalla/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted">
        Contact
      </h2>
      <h3 className="gradient-text mb-10 max-w-lg text-3xl font-bold sm:text-4xl">
        Let&apos;s talk about math, code, or the next project.
      </h3>
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="gradient-border flex items-center justify-between gap-6 rounded-xl px-5 py-4 text-sm transition-colors hover:bg-elevated sm:w-64"
          >
            <span className="text-muted">{link.label}</span>
            <span className="font-medium text-foreground">{link.value}</span>
          </a>
        ))}
      </div>
      <a
        href="/resume.pdf"
        className="mt-8 inline-block rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-105"
      >
        Download Resume
      </a>
      <p className="mt-16 text-xs text-muted">
        © {new Date().getFullYear()} Vivek Venigalla
      </p>
    </section>
  );
}
