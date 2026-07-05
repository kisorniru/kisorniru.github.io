import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import {
  STR_PORT_EMAIL,
  STR_PORT_GITHUB,
  STR_PORT_LINKEDIN,
  STR_PORT_LOCATION,
  STR_PORT_PHONE,
  STR_PORT_RESUME,
} from '../../data';

export default function ContactSection() {
  const contactMailto = `mailto:${STR_PORT_EMAIL}?subject=Portfolio%20Opportunity%20Discussion`;

  return (
    <section id="contact" className="scroll-mt-24 pb-12 pt-16 sm:pb-16 sm:pt-20">
      <div className="overflow-hidden rounded-[2rem] bg-[var(--color-ink)] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <h2 className="max-w-2xl text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
              Let’s Build Together
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
              Available for senior engineering roles, architecture reviews, and backend leadership opportunities.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={contactMailto}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#d1782b] px-5 text-sm font-bold text-[#211d19] transition-colors hover:bg-[#e0914b]"
              >
                Email me <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a
                href={STR_PORT_RESUME}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/25 px-5 text-sm font-semibold text-white hover:border-white/50"
              >
                <Download size={17} aria-hidden="true" />
                Download resume
              </a>
            </div>
          </div>

          <div className="space-y-5 border-t border-white/15 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <ContactLine icon={<Mail size={18} />} label="Email">
              <a href={`mailto:${STR_PORT_EMAIL}`} className="hover:text-[#e3a367]">
                {STR_PORT_EMAIL}
              </a>
            </ContactLine>
            <ContactLine icon={<Phone size={18} />} label="Phone">
              <a href={`tel:${STR_PORT_PHONE.replace(/\s/g, '')}`} className="hover:text-[#e3a367]">
                {STR_PORT_PHONE}
              </a>
            </ContactLine>
            <ContactLine icon={<MapPin size={18} />} label="Location">
              <span>{STR_PORT_LOCATION}</span>
            </ContactLine>

            <div className="flex flex-wrap gap-3 pt-3">
              <SocialLink href={STR_PORT_GITHUB} label="GitHub" icon={<Github size={19} />} />
              <SocialLink href={STR_PORT_LINKEDIN} label="LinkedIn" icon={<Linkedin size={19} />} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLine({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="mt-1 shrink-0 text-[#e3a367]">{icon}</span>
      <div>
        <p className="text-sm text-white/50">{label}</p>
        <div className="mt-1 text-base font-medium text-white/90">{children}</div>
      </div>
    </div>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/20 px-3 text-sm font-semibold text-white transition-colors hover:border-white/50"
      aria-label={`${label} profile`}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
