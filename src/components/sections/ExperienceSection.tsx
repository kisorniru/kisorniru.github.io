import { WORK_HISTORY } from '../../data';
import SectionHeading from '../layout/SectionHeading';

export default function ExperienceSection() {
  return (
    <section id="experience-section-point" className="space-y-6">
      <SectionHeading number="_02" title="Senior Experience Chronicles" />

      <div className="relative ml-2 space-y-10 border-l border-stone-300 py-2 pl-4 sm:pl-6">
        {WORK_HISTORY.map((job) => (
          <article key={job.id} className="group relative space-y-2">
            <span className="absolute left-[-21px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-amber-500 bg-stone-50 transition-all group-hover:scale-125 sm:left-[-29px]" />

            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <div>
                <h4 className="font-display text-base font-bold leading-tight text-stone-950">
                  {job.role}
                </h4>
                <p className="text-xs font-medium text-stone-700">
                  {job.company} — <span className="text-amber-600">{job.location}</span>
                </p>
              </div>
              <div className="w-fit rounded border border-stone-300 bg-stone-100 px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-stone-600">
                {job.period}
              </div>
            </div>

            <ul className="space-y-1.5 pl-1 text-xs leading-relaxed text-stone-700">
              {job.description.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="text-stone-500">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {job.projects.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 pt-2">
                <span className="mr-1 font-mono text-[10px] uppercase tracking-widest text-stone-600">
                  Led Projects:
                </span>
                {job.projects.map((project) => (
                  <span
                    key={project}
                    className="rounded border border-stone-300 bg-stone-100 px-2 py-0.5 font-mono text-[10px] text-stone-700"
                  >
                    #{project}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
