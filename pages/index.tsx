import { useEffect, useRef, useState } from "react";
import AboutMe from "../components/about-me/AboutMe";
import Canvas from "../components/canvas/Canvas";
import Footer from "../components/Footer";
import Translator from "../components/Others";
import Navbar from "../components/navbar/Navbar";
import Project from "../components/my-project/Project";
import Skills from "../components/Skills";
import ProjectAco from "../components/ProjectAco";
import MyPortfolio from "../components/MyPortfolio";
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
        <Navbar />
        <div ref={canvasRef}>
          <Canvas />
        </div>
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
