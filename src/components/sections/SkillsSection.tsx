import { SKILL_GROUPS } from '../../data';
import SectionHeading from '../layout/SectionHeading';

export default function SkillsSection() {
  return (
    <section id="skills-section-point" className="space-y-6">
      <SectionHeading number="_04" title="Architectural Skill Matrices" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <div key={group.category} className="space-y-4 rounded-xl border border-stone-300 bg-stone-100/20 p-5">
            <h4 className="border-b border-stone-300 pb-2 font-mono text-xs font-bold uppercase tracking-widest text-stone-700">
              {group.category}
            </h4>
            <div className="space-y-3">
              {group.skills.map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex items-baseline justify-between text-xs">
                    <span className="font-sans font-semibold text-stone-900">{skill.name}</span>
                    <span className="font-mono text-[11px] text-amber-600">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full border border-stone-200 bg-stone-50">
                    <div className="h-full rounded-full bg-amber-500" style={{ width: `${skill.level}%` }} />
                  </div>
                  {skill.info && <p className="font-mono text-[10px] text-stone-600">{skill.info}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
