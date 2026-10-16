import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Journey />
        <Contact />
        

      </main>

      <Footer />
    </div>
  );
}

export default App;