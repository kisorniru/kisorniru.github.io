import { Download } from 'lucide-react';
import { STR_PORT_RESUME, STR_PORT_SUBTITLE, STR_PORT_TITLE } from '../../data';

const links = [
  { href: '#about-section-point', label: '~/about_roots', index: '01' },
  { href: '#experience-section-point', label: '~/senior_experience', index: '02' },
  { href: '#projects-section-point', label: '~/microservice_projects', index: '03' },
  { href: '#skills-section-point', label: '~/architect_skills', index: '04' },
  { href: '#contact-section-point', label: '~/secure_handshake', index: '05' },
];

export default function Sidebar() {
  return (
    <aside className="flex flex-col justify-between gap-6 lg:sticky lg:top-[120px] lg:h-[calc(100vh-180px)]">
      <div className="space-y-6">
        <div className="space-y-1.5">
          <p className="font-mono text-[10px] uppercase tracking-widest text-stone-600">
            Portfolio Deployment
          </p>
          <h3 className="font-display text-xl font-extrabold tracking-tight text-stone-950">
            {STR_PORT_TITLE}
          </h3>
          <p className="font-mono text-[11px] uppercase tracking-tight text-stone-700">
            {STR_PORT_SUBTITLE}
          </p>
        </div>

        <nav className="flex flex-col space-y-2 font-mono text-xs">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center justify-between rounded border border-stone-200 border-l-2 bg-stone-100/40 p-2 text-stone-700 transition-all hover:border-l-amber-500 hover:bg-stone-200/60 hover:text-stone-950"
            >
              <span>{link.label}</span>
              <span className="text-[10px] text-stone-500">{link.index}</span>
            </a>
          ))}
        </nav>
      </div>

      <div className="space-y-2 rounded-lg border border-stone-300 bg-stone-100/90 p-3 font-mono text-[10px] text-stone-700">
        <div className="flex items-center justify-between">
          <span>SSL STATUS:</span>
          <span className="flex items-center gap-1 font-semibold text-emerald-700">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-700" /> SECURE
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>GATEWAY INTEGRITY:</span>
          <span className="font-bold text-stone-900">100.0% Verified</span>
        </div>
        <div className="flex items-center justify-between">
          <span>RESUME REF:</span>
          <span className="text-stone-900">NOOR_CV_2026</span>
        </div>
        <a
          href={STR_PORT_RESUME}
          className="flex items-center justify-center gap-1 rounded border border-stone-300 bg-stone-50 p-2 text-center text-[9px] font-bold uppercase tracking-wider text-stone-600 transition-all hover:text-stone-950"
        >
          <Download size={10} /> Download Resume
        </a>
      </div>
    </aside>
  );
}
