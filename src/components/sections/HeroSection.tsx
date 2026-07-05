import { ArrowRight } from 'lucide-react';
import {
  STR_PORT_IMAGE,
  STR_PORT_SUBTITLE,
  STR_PORT_TITLE,
} from '../../data';

type HeroSectionProps = {
  portraitLoadFailed: boolean;
  onPortraitError: () => void;
};

export default function HeroSection({ portraitLoadFailed, onPortraitError }: HeroSectionProps) {
  const [professionalTitle, technologyStack] = STR_PORT_SUBTITLE.split(' | ');

  return (
    <section
      id="home"
      className="scroll-mt-24 pt-12 sm:pt-16 lg:pt-20"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)] lg:gap-16">
        <div className="space-y-7">
          <div className="space-y-5">
            <p className="text-sm font-semibold">
              <span className="block uppercase tracking-[0.14em] text-[var(--color-accent-strong)]">
                {professionalTitle}
              </span>
              <span className="mt-1 block tracking-normal text-[var(--color-muted)]">
                {technologyStack}
              </span>
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.05em] text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
              {STR_PORT_TITLE}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
              Accomplished Senior Software Engineer with <strong className="font-semibold text-[var(--color-ink)]">11+ years of experience</strong> architecting and delivering secure, scalable backend systems across <strong className="font-semibold text-[var(--color-ink)]">e-Commerce, foodTech, EdTech, and data-driven platforms.</strong> Strong expertise in <strong className="font-semibold text-[var(--color-ink)]">Python (Django, FastAPI, Flask)</strong> and <strong className="font-semibold text-[var(--color-ink)]">PHP (Laravel),</strong> with deep experience in <strong className="font-semibold text-[var(--color-ink)]">microservices, cloud infrastructure, large-scale data processing, and payment integrations.</strong> Proven ability to lead technical teams, drive architectural decisions, and build high-availability systems at scale.
            </p>
          </div>

          <div className="flex flex-wrap gap-2" aria-label="Primary technologies">
            {['Python', 'Django', 'FastAPI', 'Laravel', 'Node.js', 'AWS', 'OWASP'].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-[var(--color-line)] bg-white/55 px-3 py-1.5 text-sm font-medium text-[var(--color-muted)]"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[var(--color-ink)] px-5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
            >
              Explore Projects <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[var(--color-line-strong)] bg-white/45 px-5 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)]"
            >
              Discuss an Opportunity
            </a>
          </div>
        </div>

        <div id="portrait-frame" className="relative mx-auto w-full max-w-[390px] lg:mx-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#171513] shadow-[0_24px_70px_rgba(45,36,27,0.18)]">
            {STR_PORT_IMAGE && !portraitLoadFailed ? (
              <img
                src={STR_PORT_IMAGE}
                alt={`${STR_PORT_TITLE} professional portrait`}
                onError={onPortraitError}
                className="h-full w-full origin-[50%_22%] scale-[1.32] object-cover object-[center_18%]"
              />
            ) : (
              <PortraitFallback />
            )}
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <Stat value="11+" label="Years Experience" />
        <Stat value="6+" label="Years with Solution Design and Leading" />
        <Stat value="1M+" label="Records Processed" />
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-baseline gap-4 py-5 sm:block sm:px-6 sm:first:pl-0">
      <div className="text-2xl font-bold tracking-[-0.03em] text-[var(--color-ink)] sm:text-3xl">
        {value}
      </div>
      <div className="mt-1 text-sm leading-5 text-[var(--color-muted)]">{label}</div>
    </div>
  );
}

function PortraitFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#25211d] p-8 text-center text-sm text-white/70">
      <div>
        <div className="mx-auto mb-4 h-16 w-16 rounded-full border border-white/30" />
        <p>Professional portrait</p>
      </div>
    </div>
  );
}
