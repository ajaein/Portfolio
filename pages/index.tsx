import { useEffect, useRef, useState } from "react";
import AboutMe from "../components/about-me/AboutMe";
import Canvas from "../components/canvas/Canvas";
import Footer from "../components/Footer";
import Translator from "../components/Others";
import Navbar from "../components/Navbar";
import Project from "../components/my-project/Project";
import Skills from "../components/Skills";
import ProjectAco from "../components/ProjectAco";
import MyPortfolio from "../components/MyPortfolio";
import MyBlog from "../components/MyBlog";
import Career from "../components/Others";
import Decommi from "../components/decommi";
import { useModalToggle } from "../hooks";

const Home = () => {
  const [canvas, setCanvas] = useState<number>();
  const [trslModal, onTrslModalToggle] = useModalToggle();
  const [acoModal, onAcoModalToggle] = useModalToggle();
  const [portfolioModal, onPortfolioModalToggle] = useModalToggle();

  const canvasRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setCanvas(entry.boundingClientRect.height);
    });
    observer.observe(canvasRef.current as HTMLDivElement);
  }, []);

  return (
    <>
      <div className={`${trslModal ? "modal-backdrop show" : "none"}`}>
        <Translator onModal={onTrslModalToggle} />
      </div>
      <div className={`${acoModal ? "modal-backdrop show" : "none"}`}>
        <ProjectAco onModal={onAcoModalToggle} />
      </div>
      <div className={`${portfolioModal ? "modal-backdrop show" : "none"}`}>
        <MyPortfolio onModal={onPortfolioModalToggle} />
      </div>
      <main className="main">
        <nav className="nav-sticky">
          <Navbar />
        </nav>
        <section ref={canvasRef} className="section-00">
          <Canvas />
        </section>
        <section id="about">
          <AboutMe canvas={canvas} />
        </section>
        <section id="skill">
          <Skills />
        </section>
        <section id="project">
          <Project
            onModal={onTrslModalToggle}
            onAcoModal={onAcoModalToggle}
            onPortfolioModal={onPortfolioModalToggle}
          />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Home;
