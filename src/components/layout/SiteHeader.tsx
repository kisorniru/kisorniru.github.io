import { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { STR_PORT_RESUME, STR_PORT_TITLE } from '../../data';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[var(--color-canvas)]/95 backdrop-blur-lg">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:h-[72px] sm:px-8 lg:px-10">
        <a
          href="#home"
          onClick={closeMenu}
          className="flex min-h-11 items-center gap-3 rounded-sm font-semibold tracking-[-0.02em] text-[var(--color-ink)]"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-ink)] text-sm font-bold text-[var(--color-canvas)]">
            NS
          </span>
          <span className="hidden text-[15px] sm:inline">{STR_PORT_TITLE}</span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-[var(--color-muted)] transition-colors hover:bg-white/60 hover:text-[var(--color-ink)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={STR_PORT_RESUME}
            className="ml-2 flex min-h-11 items-center gap-2 rounded-lg border border-[var(--color-line-strong)] px-4 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)]"
          >
            <Download size={16} aria-hidden="true" />
            Resume
          </a>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--color-line)] text-[var(--color-ink)] lg:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-4 lg:hidden"
        >
          <div className="mx-auto grid max-w-6xl gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex min-h-11 items-center rounded-lg px-3 text-base font-medium text-[var(--color-ink)] hover:bg-[var(--color-canvas)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={STR_PORT_RESUME}
              onClick={closeMenu}
              className="mt-2 flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[var(--color-ink)] px-4 text-sm font-semibold text-white"
            >
              <Download size={16} aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
