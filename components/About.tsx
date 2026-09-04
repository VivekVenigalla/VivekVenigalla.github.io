import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-12 text-sm font-medium uppercase tracking-[0.2em] text-muted">
        About
      </h2>
      <div className="grid grid-cols-1 items-center gap-12 sm:grid-cols-[280px_1fr]">
        <div className="gradient-border relative mx-auto aspect-square w-56 overflow-hidden rounded-2xl sm:w-full">
          <Image
            src="/profile.jpg"
            alt="Vivek Venigalla"
            fill
            sizes="(min-width: 640px) 280px, 224px"
            className="object-cover"
            priority
          />
        </div>
        <div className="text-lg leading-relaxed text-muted">
          <p>
            I&apos;m a Math and Computer Science student at the{" "}
            <span className="text-foreground">University of Georgia</span>,
            studying mathematics with a Financial Mathematics emphasis
            alongside computer science. I like building things that turn
            rigorous ideas — market microstructure, orbital mechanics, human
            posture — into working software.
          </p>
          <p className="mt-4">
            Outside of school and code, I&apos;m usually on a tennis court, at
            a cricket match, reading, or thinking about physics. I&apos;m a
            Classic Scholarship recipient, a Presidential Scholar candidate,
            and a multi-time TSA State and National finalist.
          </p>
        </div>
      </div>
    </section>
  );
}
