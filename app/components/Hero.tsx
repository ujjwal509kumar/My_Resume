import { ArrowUpRight, FileText, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import SocialLinks from "./SocialLinks";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <Reveal className="hero-avatar-wrap">
          <div className="avatar">{profile.initials}</div>
        </Reveal>

        <Reveal delay={0.05}>
          {profile.available && (
            <span className="status-pill">
              <span className="status-dot" /> Available for freelance work
            </span>
          )}
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="hero-name">{profile.name}</h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="hero-title">{profile.title}</p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="hero-tagline">{profile.tagline}</p>
        </Reveal>

        <Reveal delay={0.25} className="hero-meta">
          <span className="hero-location">
            <MapPin size={15} strokeWidth={1.75} /> {profile.location}
          </span>
        </Reveal>

        <Reveal delay={0.3} className="hero-actions">
          <a className="btn btn-primary" href="#contact">
            Get in touch <ArrowUpRight size={17} strokeWidth={2} />
          </a>
          <a className="btn btn-ghost" href="#resume">
            <FileText size={16} strokeWidth={1.75} /> View résumé
          </a>
        </Reveal>

        <Reveal delay={0.35}>
          <SocialLinks className="hero-socials" />
        </Reveal>
      </div>
    </section>
  );
}
