import { Download, Github, Linkedin, Mail, MapPin, Phone, Send, Settings } from 'lucide-react';
import {
  STR_PORT_EMAIL,
  STR_PORT_GITHUB,
  STR_PORT_LINKEDIN,
  STR_PORT_LOCATION,
  STR_PORT_PHONE,
  STR_PORT_RESUME,
} from '../../data';
import SectionHeading from '../layout/SectionHeading';

export default function ContactSection() {
  const contactMailto = `mailto:${STR_PORT_EMAIL}?subject=Portfolio%20Opportunity%20Discussion`;

  return (
    <section id="contact-section-point" className="space-y-6">
      <SectionHeading number="_05" title="Aviation-Standard Digital Handshake" />

      <div className="grid grid-cols-1 gap-6 rounded-2xl border border-stone-300 bg-stone-100/30 p-6 md:grid-cols-12">
        <div className="space-y-4 font-mono text-xs text-stone-700 md:col-span-5">
          <h4 className="font-display font-bold uppercase tracking-wider text-stone-700">
            Contract Credentials
          </h4>

          <div className="space-y-3">
            <ContactLine icon={<Mail size={15} />} label="E-mail ingestion node">
              <a href={`mailto:${STR_PORT_EMAIL}`} className="text-stone-900 hover:underline">
                {STR_PORT_EMAIL}
              </a>
            </ContactLine>
            <ContactLine icon={<Phone size={15} />} label="Secure VOIP line">
              <a href={`tel:${STR_PORT_PHONE}`} className="text-stone-900 hover:underline">
                {STR_PORT_PHONE}
              </a>
            </ContactLine>
            <ContactLine icon={<MapPin size={15} />} label="Current base node">
              <span className="text-stone-900">{STR_PORT_LOCATION}</span>
            </ContactLine>
          </div>

          <div className="flex gap-2.5 pt-4">
            <SocialLink href={STR_PORT_GITHUB} label="GitHub Coordinates" icon={<Github size={15} />} />
            <SocialLink href={STR_PORT_LINKEDIN} label="LinkedIn Pipeline" icon={<Linkedin size={15} />} />
          </div>
        </div>

        <div className="space-y-4 rounded-xl border border-stone-300/80 bg-stone-50/80 p-5 md:col-span-7">
          <p className="flex items-center gap-1.5 border-b border-stone-300 pb-2 font-mono text-[10px] font-bold uppercase tracking-widest text-stone-700">
            <Settings className="animate-spin-slow text-amber-500" size={12} /> Direct Recruiter Handshake
          </p>

          <div className="space-y-3 text-sm leading-relaxed text-stone-700">
            <p>
              For senior engineering roles, architecture reviews, or backend leadership
              opportunities, the fastest route is email with role context, timezone, and expected
              interview process.
            </p>
            <p className="font-mono text-xs text-stone-600">
              No backend form is used on this site. Contact actions open your mail or phone client directly.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <ActionLink href={contactMailto} primary icon={<Send size={13} />} label="Email Opportunity" />
            <ActionLink href={STR_PORT_RESUME} icon={<Download size={13} />} label="Download Resume" />
            <ActionLink href={STR_PORT_LINKEDIN} external icon={<Linkedin size={13} />} label="LinkedIn" />
            <ActionLink href={STR_PORT_GITHUB} external icon={<Github size={13} />} label="GitHub" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLine({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="shrink-0 text-amber-500">{icon}</span>
      <div>
        <p className="text-[10px] uppercase text-stone-600">{label}:</p>
        {children}
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
      className="flex items-center justify-center rounded border border-stone-300 bg-stone-100 p-2 transition-all hover:bg-stone-200 hover:text-stone-950"
      title={label}
    >
      {icon}
    </a>
  );
}

function ActionLink({
  href,
  icon,
  label,
  external = false,
  primary = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`flex items-center justify-center gap-2 rounded px-4 py-3 text-xs font-semibold uppercase tracking-wider transition-all ${
        primary
          ? 'bg-amber-500 text-stone-950 hover:bg-amber-600'
          : 'border border-stone-300 bg-stone-100 text-stone-800 hover:border-amber-500 hover:text-stone-950'
      }`}
    >
      {icon} {label}
    </a>
  );
}
