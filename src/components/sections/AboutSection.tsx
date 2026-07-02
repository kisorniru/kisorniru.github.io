import { Layers, ShieldCheck, Terminal } from 'lucide-react';
import SectionHeading from '../layout/SectionHeading';

const pillars = [
  {
    icon: Terminal,
    title: '1. Defensive Contracts',
    description: 'Designing API layers that pre-validate limits to avoid unhandled system exceptions or DB lockups.',
    color: 'text-amber-500',
  },
  {
    icon: ShieldCheck,
    title: '2. Safe Escrows & Finance',
    description: 'Managing double-entry ledgers inside PostgreSQL with lock state isolation to prevent payment token leakages.',
    color: 'text-indigo-600',
  },
  {
    icon: Layers,
    title: '3. Queue-Driven Resilience',
    description: 'Using Redis pools so structural traffic surges sit safely in memory rather than taking down primary tables.',
    color: 'text-emerald-700',
  },
];

const logs = [
  'In 11+ years, zero API integrations have failed due to unvalidated input objects. Contract-first RESTful testing means validation runs before DB compilation hooks.',
  'Stripe / Mangopay payments isolation level set to SERIALIZABLE during core debit handshakes. Eliminates race conditions in concurrent lottery ticketing.',
  'TableTap AI operations uses sub-150ms Redis queue relays to isolate long-running Python FastAPI analysis loads from the core database process.',
];

type AboutSectionProps = {
  activePillar: number;
  onSelectPillar: (index: number) => void;
};

export default function AboutSection({ activePillar, onSelectPillar }: AboutSectionProps) {
  return (
    <section id="about-section-point" className="space-y-6">
      <SectionHeading number="_01" title="The Quality Paradigm (Why SQA Roots Matter)" />

      <div className="space-y-6 rounded-xl border border-stone-300 bg-stone-100/20 p-6">
        <div className="max-w-none text-xs leading-relaxed text-stone-700 sm:text-sm">
          <p>
            Most system architects build features and let testing teams worry about scalability or
            edge failures. Because my career set its foundations in{' '}
            <strong>2013 as an SQA Engineer at Hungrynaki.com</strong>, I look at software
            development from the end-state error tolerance first.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isActive = activePillar === index;
            return (
              <button
                key={pillar.title}
                onClick={() => onSelectPillar(index)}
                className={`rounded-lg border p-4 text-left transition-all ${
                  isActive
                    ? 'border-amber-500 bg-stone-100 shadow-md'
                    : 'border-stone-300 bg-stone-50 hover:border-stone-400'
                }`}
              >
                <Icon className={`mb-2 ${pillar.color}`} size={16} />
                <h4 className="font-display text-xs font-bold uppercase text-stone-950">
                  {pillar.title}
                </h4>
                <p className="mt-1 text-[10.5px] leading-relaxed text-stone-700">
                  {pillar.description}
                </p>
                <span className={`mt-2 block font-mono text-[9px] ${pillar.color}`}>
                  Active Principle
                </span>
              </button>
            );
          })}
        </div>

        <div className="rounded border border-stone-300 bg-stone-50 p-3.5 font-mono text-[11px] text-stone-700">
          <p className="mb-1.5 text-[9px] font-bold uppercase tracking-widest text-stone-600">
            Root QA Architectural Log:
          </p>
          <p className="leading-relaxed">
            <span className="text-amber-600">INFO:</span> {logs[activePillar]}
          </p>
        </div>
      </div>
    </section>
  );
}
