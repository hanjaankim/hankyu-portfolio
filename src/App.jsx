import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Lightbox from "./components/Lightbox/Lightbox";
import { LightboxProvider } from "./context/LightboxContext";
import "./App.css";

function App() {
  return (
    <LightboxProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Lightbox />
      </div>
    </LightboxProvider>
  );
}

export default App;
