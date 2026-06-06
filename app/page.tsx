import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import LiveClock from "./components/LiveClock";
import { profile } from "./data/profile";

export default function Home() {
  return (
    <>
      {/* Soft static background */}
      <div className="bg-canvas" aria-hidden="true">
        <div className="bg-blob bg-blob-1" />
        <div className="bg-blob bg-blob-2" />
        <div className="bg-grain" />
      </div>

      <Navbar />

      <main className="page">
        <Hero />
        <About />
        <Services />
        <Resume />
        <Contact />
      </main>

      <footer className="site-footer">
        <span>
          © {2026} {profile.name}
        </span>
        <span className="footer-dot" />
        <span className="footer-location">📍 {profile.location}</span>
        <span className="footer-dot" />
        <LiveClock />
      </footer>
    </>
  );
}
