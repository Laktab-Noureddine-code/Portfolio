import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/hooks/useTheme";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;