import { ArrowRight, Cpu } from 'lucide-react';
import { STR_PORT_IMAGE, STR_PORT_TITLE } from '../../data';
import { theme } from '../../lib/theme';

type HeroSectionProps = {
  portraitLoadFailed: boolean;
  onPortraitError: () => void;
};

export default function HeroSection({ portraitLoadFailed, onPortraitError }: HeroSectionProps) {
  return (
    <section
      id="hero-section"
      className="relative grid grid-cols-1 gap-8 overflow-hidden rounded-2xl border border-stone-300/80 bg-stone-100/30 p-6 sm:p-8 md:grid-cols-[1.2fr_0.8fr]"
    >
      <div className="flex flex-col justify-center space-y-6">
        <div className="space-y-2">
          <div className={`inline-flex w-fit items-center gap-1.5 rounded border border-stone-400/60 bg-stone-200 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest ${theme.accentText}`}>
            <Cpu size={11} /> Solutions Architect & Lead
          </div>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-stone-950 sm:text-4.5xl">
            {STR_PORT_TITLE}
          </h2>
          <p className="text-sm leading-relaxed text-stone-700 sm:text-base">
            Transforming business logic into hyper-performant backend architectures. With{' '}
            <strong>11+ years of experience</strong> across eCommerce, FinTech, and real-time
            systems, I engineer platforms designed to handle millions of transactions, strict
            compliance, and complex data-driven modules with mathematical quality.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 border-y border-stone-300 py-4 font-mono">
          <Stat value="11" label="Years Depth" />
          <Stat value="1M" label="Data Records Daily" bordered />
          <Stat value="5" label="Team Lead Yrs" bordered />
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="#projects-section-point"
            className={`${theme.accentBg} ${theme.accentBgHover} flex items-center gap-2 rounded px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-950 shadow-lg transition-all`}
          >
            Examine Microservices <ArrowRight size={13} />
          </a>
          <a
            href="#contact-section-point"
            className="flex items-center gap-2 rounded border border-stone-400 bg-stone-200/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-800 transition-all hover:border-amber-500 hover:bg-stone-300"
          >
            Request Technical Audit
          </a>
        </div>
      </div>

      <div id="portrait-frame" className="relative flex flex-col items-center justify-center">
        <div className="group relative aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-xl border border-stone-300/90">
          {STR_PORT_IMAGE && !portraitLoadFailed ? (
            <img
              src={STR_PORT_IMAGE}
              alt={`${STR_PORT_TITLE} professional portrait`}
              onError={onPortraitError}
              className="h-full w-full object-cover"
            />
          ) : (
            <PortraitFallback />
          )}
        </div>

        <div className="mt-3 text-center">
          <p className="font-mono text-[10px] text-stone-600">PORTRAIT: NOOR-A-ALAM SIDDIQUE</p>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label, bordered = false }: { value: string; label: string; bordered?: boolean }) {
  return (
    <div className={bordered ? 'border-l border-stone-300 pl-3' : undefined}>
      <div className="flex items-baseline gap-1 text-xl font-bold text-stone-950 sm:text-2xl">
        {value}
        <span className="text-xs font-semibold text-amber-500">+</span>
      </div>
      <div className="mt-1 text-[10px] uppercase tracking-tight text-stone-600">{label}</div>
    </div>
  );
}

function PortraitFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-stone-200/50">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-stone-500 opacity-60"
      >
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 2" />
        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
        <path
          d="M 50 25 C 42 25, 41 35, 41 38 C 41 45, 46 47, 46 50 C 45 52, 41 55, 30 65 L 70 65 C 59 55, 55 52, 54 50 C 54 47, 59 45, 59 38 C 59 35, 58 25, 50 25 Z"
          fill="currentColor"
          opacity="0.3"
        />
        <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.25" />
        <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.25" />
        <circle cx="48" cy="48" r="1.5" fill="#f59e0b" />
        <text x="35" y="78" fill="currentColor" fontSize="3" fontFamily="monospace">
          PORTRAIT_PENDING
        </text>
      </svg>
    </div>
  );
}
