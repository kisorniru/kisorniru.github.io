import { useEffect, useRef } from 'react';
import type { KeyboardEvent } from 'react';
import { X } from 'lucide-react';
import type { Project } from '../../data';

type ProjectInspectorModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectInspectorModal({
  project,
  onClose,
}: ProjectInspectorModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 0);
    const handleEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

  const trapFocus = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab' || !dialogRef.current) return;

    const focusable = Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#171513]/80 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        onKeyDown={trapFocus}
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-[var(--color-surface)] p-6 shadow-2xl sm:p-8"
      >
            <div className="flex items-start justify-between gap-6 border-b border-[var(--color-line)] pb-5">
              <div>
                <p className="text-sm font-semibold text-[var(--color-accent-strong)]">
                  {project.category} Case Study
                </p>
                <h2 id="project-dialog-title" className="mt-2 text-2xl font-bold tracking-[-0.03em] text-[var(--color-ink)]">
                  {project.title}
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close case study"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-line-strong)] hover:text-[var(--color-ink)]"
              >
                <X size={19} aria-hidden="true" />
              </button>
            </div>

            <p className="mt-6 text-base leading-7 text-[var(--color-muted)]">{project.longDescription}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-[var(--color-canvas)] px-3 py-1.5 text-xs font-semibold text-[var(--color-muted)]"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-7 grid grid-cols-1 gap-3 border-t border-[var(--color-line)] pt-6 sm:grid-cols-3">
              {project.stats.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-[var(--color-canvas)] p-4">
                  <div className="text-xs font-medium text-[var(--color-muted)]">{stat.label}</div>
                  <div className="mt-1 text-base font-bold text-[var(--color-ink)]">{stat.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="min-h-11 rounded-lg bg-[var(--color-ink)] px-5 text-sm font-semibold text-white"
              >
                Close Inspector
              </button>
            </div>
      </div>
    </div>
  );
}
