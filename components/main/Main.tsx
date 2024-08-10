import { useEffect, useRef, useState } from "react";
import AboutMe from "@/components/about-me/AboutMe";
import Canvas from "@/components/canvas/Canvas";

import Translator from "@/components/project-modals/Others";
import { Footer, Navbar } from "@/components/layout";
import Project from "@/components/my-project/Project";
import Skills from "@/components/skill/Skills";
import ProjectAco from "@/components/project-modals/ProjectAco";
import MyPortfolio from "@/components/project-modals/MyPortfolio";
import { useModalToggle } from "@/hooks";
import commonStyles from "@/styles/common.module.scss";


const Main = () => {
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
      <div className={`${trslModal ? `${commonStyles.modalBackdrop} show` : commonStyles.none}`}>
        <Translator onModal={onTrslModalToggle} />
      </div>
      <div className={`${acoModal ? `${commonStyles.modalBackdrop} show` : commonStyles.none}`}>
        <ProjectAco onModal={onAcoModalToggle} />
      </div>
      <div className={`${portfolioModal ? `${commonStyles.modalBackdrop} show` : commonStyles.none}`}>
        <MyPortfolio onModal={onPortfolioModalToggle} />
      </div>
      <main className="main">
        <Navbar />
        <div ref={canvasRef} id="home">
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

export default Main;
