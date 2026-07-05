import { SKILL_GROUPS } from '../../data';
import SectionHeading from '../layout/SectionHeading';

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 pt-16 sm:pt-20">
      <SectionHeading
        title="Architectural Skill Matrices"
      />

      <div className="mt-12 grid overflow-hidden rounded-3xl border border-[var(--color-line)] bg-white/45 md:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <article
            key={group.category}
            className="border-b border-[var(--color-line)] p-6 last:border-b-0 md:p-8 md:[&:nth-child(odd)]:border-r md:[&:nth-last-child(-n+2)]:border-b-0"
          >
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-[var(--color-ink)]">
              {group.category}
            </h3>
            <div className="mt-6 space-y-6">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <h4 className="text-base font-semibold text-[var(--color-ink)]">{skill.name}</h4>
                  <div
                    role="progressbar"
                    aria-label={`${skill.name} proficiency`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={skill.level}
                    className="mt-3 h-2 overflow-hidden rounded-full bg-[var(--color-line)]"
                  >
                    <div
                      className="h-full rounded-full bg-[var(--color-accent)]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  {skill.info && (
                    <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{skill.info}</p>
                  )}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
