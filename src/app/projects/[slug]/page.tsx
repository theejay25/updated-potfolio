import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? `${project.title} | Project` : "Project not found" };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const [from, to] = project.cover;

  return (
    <article className="px-6 pb-24 pt-32">
      <div className="mx-auto max-w-4xl">
        <Link href="/#projects" className="text-sm font-medium text-muted transition hover:text-ink">
          Back to projects
        </Link>

        <div
          className="mt-6 flex h-56 items-end rounded-3xl p-8 shadow-card sm:h-72"
          style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
        >
          <h1 className="font-display text-4xl font-extrabold text-white drop-shadow-md sm:text-6xl">
            {project.title}
          </h1>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-bold">About this project</h2>
            <p className="mt-3 text-lg leading-relaxed text-muted">{project.description}</p>

            <h2 className="mt-10 font-display text-2xl font-bold">Highlights</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-lg text-muted">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          <aside className="h-fit rounded-3xl border border-line bg-surface p-6 shadow-card">
            <h2 className="font-display text-xl font-bold">Technologies</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li key={t} className="rounded-full border border-line bg-bg px-3 py-1 text-sm font-medium">
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-accent px-5 py-3 text-center font-medium text-white transition hover:brightness-110"
              >
                View live project
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-line px-5 py-3 text-center font-medium transition hover:border-accent hover:text-accent"
              >
                View source code
              </a>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
