import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../../data';
import type { Project } from '../../data';
import SectionHeading from '../layout/SectionHeading';

type ProjectsSectionProps = {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  onProjectSelect: (project: Project) => void;
};

export default function ProjectsSection({
  activeCategory,
  onCategoryChange,
  onProjectSelect,
}: ProjectsSectionProps) {
  const categories = ['All', ...Array.from(new Set(PORTFOLIO_PROJECTS.map((project) => project.category)))];
  const filteredProjects =
    activeCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="scroll-mt-24 pt-16 sm:pt-20">
      <SectionHeading
        title="Microservice Case Studies"
      />

      <div className="mt-10 flex flex-wrap gap-2" aria-label="Filter projects by category">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => onCategoryChange(category)}
            aria-pressed={activeCategory === category}
            className={`min-h-11 rounded-full px-4 text-sm font-semibold transition-colors ${
              activeCategory === category
                ? 'bg-[var(--color-ink)] text-white'
                : 'border border-[var(--color-line)] bg-white/50 text-[var(--color-muted)] hover:border-[var(--color-line-strong)] hover:text-[var(--color-ink)]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onInspect={() => onProjectSelect(project)} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, onInspect }: { project: Project; onInspect: () => void }) {
  return (
    <article className="flex flex-col justify-between rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-[0_12px_35px_rgba(55,45,35,0.04)] transition-transform hover:-translate-y-1">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-sm font-semibold text-[var(--color-accent-strong)]">
            {project.category}
          </span>
          <span className="text-sm text-[var(--color-muted)]">{project.role}</span>
        </div>
        <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
          {project.title}
        </h3>
        <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">{project.description}</p>

        <p className="mt-5 text-sm font-semibold text-[var(--color-muted)]">Active Stack:</p>
        <div className="mt-2 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-[var(--color-canvas)] px-3 py-1.5 text-xs font-semibold text-[var(--color-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3 border-t border-[var(--color-line)] pt-5">
        {project.stats.map((stat) => (
          <div key={stat.label}>
              <div className="text-sm font-bold text-[var(--color-ink)]">{stat.value}</div>
              <div className="mt-1 text-xs leading-4 text-[var(--color-muted)]">
              {stat.label}
            </div>
          </div>
        ))}
        </div>
      </div>

      <button
        type="button"
        onClick={onInspect}
        className="mt-6 flex min-h-11 w-fit items-center gap-2 rounded-lg font-semibold text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent-strong)]"
      >
        Inspect Case Study <ArrowUpRight size={17} aria-hidden="true" />
      </button>
    </article>
  );
}
