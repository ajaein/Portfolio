import { useCallback, useEffect, useRef, useState } from "react";
import AboutMe from "../components/AboutMe";
import Canvas from "../components/canvas/Canvas";
import Footer from "../components/Footer";
import Translator from "../components/Others";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Skills from "../components/Skills";
import ProjectAco from "../components/ProjectAco";
import MyPortfolio from "../components/MyPortfolio";
import MyBlog from "../components/MyBlog";
import Career from "../components/Others";
import Decommi from "../components/decommi";

const Home = () => {
  const [canvas, setCanvas] = useState<number>();
  const [blogModal, setBlogModal] = useState(false);
  const [trslModal, setTrslModal] = useState(false);
  const [acoModal, setAcoModal] = useState(false);
  const [portfolioModal, setPortfolioModal] = useState(false);
  const [decommiModal, setDecommiModal] = useState(false);

  const canvasRef = useRef<HTMLDivElement | null>(null);

  /**
   * Modal창 스크롤 고정
   */
  let currentScroll = 0;
  const lockScroll = useCallback(() => {
    currentScroll = window.scrollY;
    document.body.style.overflowY = "scroll";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `${currentScroll}px`;
  }, [currentScroll]);

  const openScroll = useCallback(() => {
    document.querySelector(".modal-backdrop > .modal")?.scrollTo(0, 0);
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("position");
    document.body.style.removeProperty("width");
    document.body.style.removeProperty("top");
    window.scrollTo(0, currentScroll);
  }, [currentScroll]);

  /**
   * Modal창 Toggle
   */
  const onBlogModalToggle = useCallback(() => {
    setBlogModal((prev) => !prev);
    if (!blogModal) {
      lockScroll();
    } else {
      openScroll();
    }
  }, [blogModal, lockScroll, openScroll]);

  const onTrslModalToggle = useCallback(() => {
    setTrslModal((prev) => !prev);
    if (!trslModal) {
      lockScroll();
    } else {
      openScroll();
    }
  }, [trslModal, lockScroll, openScroll]);

  const onAcoModalToggle = useCallback(() => {
    setAcoModal((prev) => !prev);
    if (!acoModal) {
      lockScroll();
    } else {
      openScroll();
    }
  }, [acoModal, lockScroll, openScroll]);

  const onPortfolioModalToggle = useCallback(() => {
    setPortfolioModal((prev) => !prev);
    if (!portfolioModal) {
      lockScroll();
    } else {
      openScroll();
    }
  }, [portfolioModal, lockScroll, openScroll]);

  const onDecommiModalToggle = useCallback(() => {
    setDecommiModal((prev) => !prev);
    if (!decommiModal) {
      lockScroll();
    } else {
      openScroll();
    }
  }, [decommiModal, lockScroll, openScroll]);

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
        <Translator trslModal={trslModal} onModal={onTrslModalToggle} />
      </div>
      <div className={`${acoModal ? "modal-backdrop show" : "none"}`}>
        <ProjectAco onModal={onAcoModalToggle} />
      </div>
      <div className={`${portfolioModal ? "modal-backdrop show" : "none"}`}>
        <MyPortfolio onModal={onPortfolioModalToggle} />
      </div>
      <div className={`${decommiModal ? "modal-backdrop show" : "none"}`}>
        <Decommi onModal={onDecommiModalToggle} />
      </div>
      <div className={`${blogModal ? "modal-backdrop show" : "none"}`}>
        <MyBlog onBlogModal={onBlogModalToggle} />
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
            onBlogModal={onBlogModalToggle}
            onModal={onTrslModalToggle}
            onAcoModal={onAcoModalToggle}
            onPortfolioModal={onPortfolioModalToggle}
            onDecommiModal={onDecommiModalToggle}
          />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Home;
