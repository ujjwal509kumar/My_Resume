import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";
import Reveal from "./Reveal";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
  },
];

export default function Contact() {
  return (
    <section className="section" id="contact">
      <SectionHeading eyebrow="Say hello" title="Get in touch" />

      <Reveal className="contact-card">
        <div className="contact-copy">
          <h3 className="contact-headline">
            Have a project in mind? Let&apos;s build something great.
          </h3>
          <p className="contact-sub">
            I&apos;m open to freelance work and collaborations. Drop me a line
            and I&apos;ll get back to you soon.
          </p>
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            Send me an email <ArrowUpRight size={17} strokeWidth={2} />
          </a>
          <SocialLinks className="contact-socials" />
        </div>

        <ul className="contact-channels">
          {channels.map((c) => {
            const Icon = c.icon;
            const inner = (
              <>
                <span className="fact-icon">
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <span className="fact-body">
                  <span className="fact-label">{c.label}</span>
                  <span className="fact-value">{c.value}</span>
                </span>
              </>
            );
            return (
              <li key={c.label} className="fact-card">
                {c.href ? (
                  <a href={c.href} className="contact-channel-link">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
