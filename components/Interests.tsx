import { interests } from "@/data/skills";

export default function Interests() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-12">
      <h2 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-muted">
        Interests
      </h2>
      <div className="flex flex-wrap gap-3">
        {interests.map((interest) => (
          <span
            key={interest}
            className="gradient-border rounded-full px-4 py-2 text-sm text-foreground"
          >
            {interest}
          </span>
        ))}
      </div>
    </section>
  );
}
