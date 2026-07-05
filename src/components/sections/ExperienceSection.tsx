import { WORK_HISTORY } from '../../data';
import SectionHeading from '../layout/SectionHeading';

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 pt-16 sm:pt-20">
      <SectionHeading
        title="Senior Experience Chronicles"
      />

      <div className="mt-12 divide-y divide-[var(--color-line)] border-t border-[var(--color-line)]">
        {WORK_HISTORY.map((job) => (
          <article key={job.id} className="grid gap-5 py-8 md:grid-cols-[210px_1fr] md:gap-10">
            <div className="space-y-1 text-sm text-[var(--color-muted)]">
              <p className="font-semibold text-[var(--color-accent-strong)]">
                {job.period}
              </p>
              <p>{job.type}</p>
              <p>{job.location}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold tracking-[-0.025em] text-[var(--color-ink)]">
                {job.role}
              </h3>
              <p className="mt-1 text-base font-medium text-[var(--color-muted)]">{job.company}</p>

              <ul className="mt-5 space-y-3 text-base leading-7 text-[var(--color-muted)]">
              {job.description.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                    <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  <span>{bullet}</span>
                </li>
              ))}
              </ul>

              {job.projects.length > 0 && (
                <div className="mt-5 flex flex-wrap items-center gap-2" aria-label="Projects led">
                  <span className="mr-1 text-sm font-semibold text-[var(--color-muted)]">
                    Led Projects:
                  </span>
                {job.projects.map((project) => (
                  <span
                    key={project}
                      className="rounded-full bg-white/60 px-3 py-1.5 text-xs font-semibold text-[var(--color-muted)]"
                  >
                      #{project}
                  </span>
                ))}
              </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
