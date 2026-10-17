import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const [from, to] = project.cover;

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
      <div
        className="flex h-44 items-end p-5"
        style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
      >
        <span className="font-display text-3xl font-extrabold text-white drop-shadow-md">
          {project.title}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="leading-relaxed text-muted">{project.summary}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((t) => (
            <li key={t} className="rounded-full border border-line bg-bg px-3 py-1 text-xs font-medium">
              {t}
            </li>
          ))}
          {project.tech.length > 3 && (
            <li className="rounded-full px-1 py-1 text-xs text-muted">+{project.tech.length - 3} more</li>
          )}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3 pt-2">
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-xl bg-ink w-full text-center px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-85"
          >
            View details &#8599;
          </Link>
 
        </div>
      </div>
    </article>
  );
}
