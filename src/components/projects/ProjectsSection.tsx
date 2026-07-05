import { Terminal } from 'lucide-react';
import { PORTFOLIO_PROJECTS, Project } from '../../data';
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
    <section id="projects-section-point" className="space-y-6">
      <SectionHeading number="_03" title="Microservice Case Studies" />

      <div className="flex flex-wrap gap-2 font-mono text-xs">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`rounded px-3 py-1 transition-all ${
              activeCategory === category
                ? 'bg-amber-500 font-bold text-stone-950'
                : 'border border-stone-300 bg-stone-100 text-stone-700 hover:border-stone-500'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onInspect={() => onProjectSelect(project)} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, onInspect }: { project: Project; onInspect: () => void }) {
  return (
    <article className="flex flex-col justify-between space-y-4 rounded-xl border border-stone-300 bg-stone-100/30 p-5 transition-all hover:border-stone-400/80">
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-3">
          <span className="rounded border border-amber-500/20 bg-amber-500/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-600">
            {project.category}
          </span>
          <span className="text-right font-mono text-[10px] uppercase text-stone-600">{project.role}</span>
        </div>
        <h4 className="font-display text-base font-bold text-stone-950">{project.title}</h4>
        <p className="text-[11.5px] leading-relaxed text-stone-700">{project.description}</p>
      </div>

      <div className="space-y-2">
        <p className="font-mono text-[10px] uppercase tracking-widest text-stone-600">Active Stack:</p>
        <div className="flex flex-wrap gap-1">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded border border-stone-300/85 bg-stone-100 px-1.5 py-0.5 font-mono text-[9.5px] text-stone-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 border-t border-stone-300/60 pt-3 text-center">
        {project.stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-mono text-xs font-bold text-stone-950">{stat.value}</div>
            <div className="mt-0.5 overflow-hidden text-ellipsis whitespace-nowrap text-[9px] text-stone-600">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onInspect}
        className="flex w-full items-center justify-center gap-1 rounded border border-stone-400 bg-stone-200 px-3 py-1.5 text-center font-mono text-[10px] text-stone-950 transition-all hover:bg-stone-300"
      >
        <Terminal size={12} /> Inspect Case Study
      </button>
    </article>
  );
}
