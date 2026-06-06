import { GraduationCap, Briefcase } from "lucide-react";
import { education, experience, type TimelineEntry } from "../data/profile";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Skills from "./Skills";

function Timeline({
  icon: Icon,
  heading,
  items,
}: {
  icon: typeof GraduationCap;
  heading: string;
  items: TimelineEntry[];
}) {
  return (
    <Reveal className="timeline">
      <div className="timeline-head">
        <span className="timeline-head-icon">
          <Icon size={18} strokeWidth={1.75} />
        </span>
        <h3 className="timeline-head-title">{heading}</h3>
      </div>

      <ol className="timeline-list">
        {items.map((item, i) => (
          <li key={i} className="timeline-item">
            <h4 className="timeline-item-title">{item.title}</h4>
            {item.org && <p className="timeline-item-org">{item.org}</p>}
            <span className="timeline-item-period">{item.period}</span>
            {item.text && <p className="timeline-item-text">{item.text}</p>}
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

export default function Resume() {
  return (
    <section className="section" id="resume">
      <SectionHeading eyebrow="My background" title="Résumé" />

      <div className="resume-grid">
        <Timeline icon={Briefcase} heading="Experience" items={experience} />
        <Timeline icon={GraduationCap} heading="Education" items={education} />
      </div>

      <Skills />
    </section>
  );
}
