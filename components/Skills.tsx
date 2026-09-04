import { languages, tools, softSkills } from "@/data/skills";

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-medium text-muted">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border bg-elevated px-3.5 py-1.5 text-sm text-foreground transition-colors hover:border-accent-teal"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-12 text-sm font-medium uppercase tracking-[0.2em] text-muted">
        Skills
      </h2>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
        <SkillGroup title="Languages" items={languages} />
        <SkillGroup title="Tools" items={tools} />
        <SkillGroup title="Beyond code" items={softSkills} />
      </div>
    </section>
  );
}
