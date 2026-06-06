import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const facts = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phoneHref}` },
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: Calendar, label: "Born", value: profile.birthday },
];

export default function About() {
  return (
    <section className="section" id="about">
      <SectionHeading eyebrow="Introduction" title="About me" />

      <div className="about-grid">
        <Reveal className="about-text">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="about-facts">
          <ul>
            {facts.map((f) => {
              const Icon = f.icon;
              return (
                <li key={f.label} className="fact-card">
                  <span className="fact-icon">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <span className="fact-body">
                    <span className="fact-label">{f.label}</span>
                    {f.href ? (
                      <a href={f.href} className="fact-value">
                        {f.value}
                      </a>
                    ) : (
                      <span className="fact-value">{f.value}</span>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
