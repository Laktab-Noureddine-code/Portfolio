import MotionProvider from "./MotionProvider";
import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import StudioSection from "./sections/StudioSection";
import ProjectsSection from "./sections/ProjectsSection";
import TechStackSection from "./sections/TechStackSection";
import GithubActivitySection from "./sections/GithubActivitySection";
import ContactSection from "./sections/ContactSection";
import HeroBackdrop from "./layout/HeroBackdrop";
import type { ContributionData } from "../lib/github";

export default function Portfolio({
  github,
}: {
  github: ContributionData | null;
}) {
  return (
    <MotionProvider>
      <div className="relative min-h-screen">
        <div className="noise pointer-events-none fixed inset-0 z-50" />
        <main>
          {/* Navbar + hero share one hexagon backdrop. */}
          <HeroBackdrop>
            <div className="relative mx-auto max-w-screen-lg px-6">
              <Navigation />
            </div>
            <HeroSection />
          </HeroBackdrop>
          <div className="mx-auto max-w-screen-lg px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
              <AboutSection />
              <StudioSection />
            </div>
            <ProjectsSection />
            <TechStackSection />
            <GithubActivitySection data={github} />
            <ContactSection />
          </div>
        </main>
        <div className="mx-auto max-w-screen-lg px-6 pb-12">
          <Footer />
        </div>
      </div>
    </MotionProvider>
  );
}
