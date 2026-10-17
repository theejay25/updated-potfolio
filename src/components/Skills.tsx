import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Skills</h2>
        <p className="mt-4 max-w-prose text-lg text-muted">
          What I use day to day, and what I&apos;m still sharpening.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-3xl border w-full border-line bg-surface p-7 shadow-card">
              <h3 className="font-display text-2xl font-bold">{group.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{group.text}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full border border-line bg-bg px-3 py-1 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
