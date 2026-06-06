import { Palette, Code2 } from "lucide-react";
import { services, type Service } from "../data/profile";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const ICONS: Record<Service["icon"], typeof Palette> = {
  palette: Palette,
  code: Code2,
};

export default function Services() {
  return (
    <section className="section" id="services">
      <SectionHeading eyebrow="What I do" title="Services" />

      <ul className="services-grid">
        {services.map((s, i) => {
          const Icon = ICONS[s.icon];
          return (
            <Reveal as="li" key={s.title} delay={i * 0.08} className="service-card">
              <span className="service-icon">
                <Icon size={22} strokeWidth={1.75} />
              </span>
              <h3 className="service-card-title">{s.title}</h3>
              <p className="service-card-text">{s.text}</p>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
