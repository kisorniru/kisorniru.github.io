import { STR_PORT_SUBTITLE, STR_PORT_TITLE } from '../../data';
import { theme } from '../../lib/theme';

const navLinks = [
  { href: '#about-section-point', label: 'About' },
  { href: '#experience-section-point', label: 'Experience' },
  { href: '#projects-section-point', label: 'Projects' },
  { href: '#skills-section-point', label: 'Skills' },
  { href: '#contact-section-point', label: 'Contact' },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-300/80 bg-[var(--color-obsidian-900)]/90 px-4 py-3 backdrop-blur-md sm:px-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <a href="#hero-section" className="flex items-center gap-3">
          <div className={`h-2.5 w-2.5 rounded-full ${theme.accentPulseBg} animate-pulse`} />
          <div>
            <h1 className="font-display text-base font-bold uppercase tracking-tight text-stone-950">
              {STR_PORT_TITLE}
            </h1>
            <p className="font-mono text-[10px] uppercase tracking-widest text-stone-700">
              {STR_PORT_SUBTITLE}
            </p>
          </div>
        </a>
        <nav className="flex gap-3 overflow-x-auto pb-1 font-mono text-[11px] uppercase tracking-wider text-stone-700 sm:pb-0">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="shrink-0 hover:text-stone-950">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
