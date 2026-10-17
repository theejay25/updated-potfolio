import { logos } from "@/data/skills";

export default function SkillsMarquee() {
  // The list is rendered twice and the track slides by exactly half, so the loop is seamless.
  const loop = [...logos, ...logos];

  return (
    <div className="marquee marquee-mask overflow-hidden py-10" aria-label="Technologies I use">
      <ul className="marquee-track flex w-max animate-marquee gap-6">
        {loop.map(({ name, Icon, color }, i) => (
          <li
            key={`${name}-${i}`}
            aria-hidden={i >= logos.length}
            className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-6 py-4 shadow-card"
          >
            <Icon className={`h-7 w-7 ${color}`} />
            <span className="whitespace-nowrap font-medium">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
