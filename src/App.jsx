import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Lightbox from "./components/Lightbox/Lightbox";
import { LightboxProvider } from "./context/LightboxContext";
import { resolveVariant } from "./data/variants";
import "./App.css";

const variant = resolveVariant(window.location.pathname);

if (variant) {
  // 기업별 제출용 페이지는 검색엔진에 노출되지 않도록 한다.
  const robots = document.createElement("meta");
  robots.name = "robots";
  robots.content = "noindex, nofollow";
  document.head.appendChild(robots);
}

function App() {
  return (
    <LightboxProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <About />
          {variant ? (
            <Projects projects={variant.projects} display={variant.display} />
          ) : (
            <Projects />
          )}
          <Skills />
          <Contact />
        </main>
        <Lightbox />
      </div>
    </LightboxProvider>
  );
}

export default App;
