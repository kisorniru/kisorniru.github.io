import { useState } from 'react';
import { Layers, ShieldCheck, Terminal } from 'lucide-react';
import SectionHeading from '../layout/SectionHeading';

const pillars = [
  {
    icon: Terminal,
    title: '1. Python Services',
    description: 'Building scalable APIs and microservices with Django, Flask, and FastAPI.',
  },
  {
    icon: ShieldCheck,
    title: '2. Laravel Platforms',
    description: 'Delivering secure Laravel and Symfony APIs for commerce, aviation, and logistics.',
  },
  {
    icon: Layers,
    title: '3. Real-time Systems',
    description: 'Using Node.js, Redis, and event-driven patterns for responsive backend workflows.',
  },
];

const logs = [
  '5+ years of Python experience across Django, Flask, and FastAPI, including e-Commerce, EdTech, analytics, and real-time products.',
  'Laravel and Symfony experience includes RESTful aviation and logistics systems, KYC workflows, and global payment integrations.',
  'Redis-backed event-driven processing supports real-time workloads, caching, and high-availability backend services.',
];

export default function AboutSection() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section id="about" className="scroll-mt-24 pt-16 sm:pt-20">
      <SectionHeading
        title="Business-Driven Engineering"
      />

      <p className="mt-6 max-w-4xl text-base leading-7 text-[var(--color-muted)]">
        I design backend systems with a business-first mindset, choosing technologies based on scalability, performance, and business needs. Python powers service and data workflows, Laravel and Symfony support core business platforms, while Node.js, Redis, and AWS drive real-time and distributed systems.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isActive = activePillar === index;
            return (
              <button
                type="button"
                key={pillar.title}
                aria-pressed={isActive}
                onClick={() => setActivePillar(index)}
                className={`min-h-44 rounded-2xl border p-5 text-left transition-colors ${
                  isActive
                    ? 'border-[var(--color-accent)] bg-[var(--color-surface)]'
                    : 'border-[var(--color-line)] bg-white/35 hover:border-[var(--color-line-strong)]'
                }`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent-strong)]">
                  <Icon size={21} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-[var(--color-ink)]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-[var(--color-muted)]">
                  {pillar.description}
                </p>
                <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent-strong)]">
                  Active Principle
                </span>
              </button>
            );
          })}
      </div>

      <div className="mt-4 rounded-2xl border border-[var(--color-line)] bg-white/45 p-5">
        <p className="text-sm font-semibold text-[var(--color-ink)]">Backend Engineering Profile:</p>
        <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
          <span className="font-semibold text-[var(--color-accent-strong)]">INFO:</span>{' '}
          {logs[activePillar]}
        </p>
      </div>
    </section>
  );
}
