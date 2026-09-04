function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M3.5 5.5h17a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m3 6 9 7 9-7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.51 2 12.07c0 4.45 2.865 8.22 6.839 9.554.5.093.683-.219.683-.487 0-.24-.009-.877-.014-1.722-2.782.61-3.369-1.353-3.369-1.353-.454-1.164-1.11-1.474-1.11-1.474-.908-.63.069-.617.069-.617 1.004.071 1.532 1.041 1.532 1.041.892 1.544 2.341 1.098 2.91.84.091-.653.35-1.098.636-1.35-2.221-.256-4.556-1.128-4.556-5.022 0-1.109.39-2.016 1.029-2.727-.103-.256-.446-1.288.098-2.686 0 0 .84-.271 2.75 1.041A9.474 9.474 0 0 1 12 6.844c.85.004 1.705.116 2.504.34 1.909-1.312 2.747-1.041 2.747-1.041.546 1.398.203 2.43.1 2.686.64.711 1.028 1.618 1.028 2.727 0 3.904-2.339 4.763-4.567 5.014.359.312.679.928.679 1.87 0 1.35-.012 2.437-.012 2.769 0 .27.18.585.688.486C19.138 20.286 22 16.517 22 12.07 22 6.51 17.523 2 12 2Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M6.94 8.5H3.56V20.5H6.94V8.5Z" />
      <path d="M5.25 7.03A1.97 1.97 0 1 0 5.25 3.09a1.97 1.97 0 0 0 0 3.94Z" />
      <path d="M20.44 20.5h-3.37v-6.28c0-1.5-.03-3.42-2.08-3.42-2.09 0-2.41 1.63-2.41 3.31v6.39H9.21V8.5h3.24v1.64h.05c.45-.85 1.56-1.75 3.2-1.75 3.42 0 4.74 2.25 4.74 5.62V20.5Z" />
    </svg>
  );
}

const links = [
  {
    label: "Email",
    href: "mailto:vivekvenigalla.2008@gmail.com",
    Icon: EmailIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/VivekVenigalla",
    Icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vivekvenigalla/",
    Icon: LinkedInIcon,
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
      <div className="flex flex-wrap gap-4">
        {links.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={label}
            title={label}
            className="gradient-border flex h-14 w-14 items-center justify-center rounded-full text-foreground transition-all hover:scale-110 hover:text-accent-teal hover:bg-elevated"
          >
            <Icon />
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
