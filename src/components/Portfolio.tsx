import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import StudioSection from "./sections/StudioSection";
import ProjectsSection from "./sections/ProjectsSection";
import TechStackSection from "./sections/TechStackSection";
import ContactSection from "./sections/ContactSection";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen">
      {/* Noise Overlay */}
      <div className="noise pointer-events-none fixed inset-0 z-50" />

      <div className="mx-auto max-w-screen-lg px-6 pb-12">
        <Navigation />

        <main>
          {/* Hero Section */}
          <HeroSection />

          {/* About + Studio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            <AboutSection />
            <StudioSection />
          </div>

          {/* Projects Section */}
          <ProjectsSection />

          {/* Tech Stack Section */}
          <TechStackSection />

          {/* Contact Section */}
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}
