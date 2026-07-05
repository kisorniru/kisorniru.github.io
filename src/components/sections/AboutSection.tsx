import { Layers, ShieldCheck, Terminal } from 'lucide-react';
import SectionHeading from '../layout/SectionHeading';

const pillars = [
  {
    icon: Terminal,
    title: '1. Python Services',
    description: 'Building scalable APIs and microservices with Django, Flask, and FastAPI.',
    color: 'text-amber-500',
  },
  {
    icon: ShieldCheck,
    title: '2. Laravel Platforms',
    description: 'Delivering secure Laravel and Symfony APIs for commerce, aviation, and logistics.',
    color: 'text-indigo-600',
  },
  {
    icon: Layers,
    title: '3. Real-time Systems',
    description: 'Using Node.js, Redis, and event-driven patterns for responsive backend workflows.',
    color: 'text-emerald-700',
  },
];

const logs = [
  '5+ years of Python experience across Django, Flask, and FastAPI, including e-Commerce, EdTech, analytics, and real-time products.',
  'Laravel and Symfony experience includes RESTful aviation and logistics systems, KYC workflows, and global payment integrations.',
  'Redis-backed event-driven processing supports real-time workloads, caching, and high-availability backend services.',
];

type AboutSectionProps = {
  activePillar: number;
  onSelectPillar: (index: number) => void;
};

export default function AboutSection({ activePillar, onSelectPillar }: AboutSectionProps) {
  return (
    <section id="about-section-point" className="space-y-6">
      <SectionHeading number="_01" title="Business-Driven Engineering" />

      <div className="space-y-6 rounded-xl border border-stone-300 bg-stone-100/20 p-6">
        <div className="max-w-none text-xs leading-relaxed text-stone-700 sm:text-sm">
          <p>
            I design backend systems with a business-first mindset, choosing technologies based on scalability, performance, and business needs. Python powers service and data workflows, Laravel and Symfony support core business platforms, while Node.js, Redis, and AWS drive real-time and distributed systems.
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
            Backend Engineering Profile:
          </p>
          <p className="leading-relaxed">
            <span className="text-amber-600">INFO:</span> {logs[activePillar]}
          </p>
        </div>
      </div>
    </section>
  );
}
