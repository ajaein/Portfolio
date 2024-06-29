import Image from "next/image";
import HTML from "../public/HTML5_logo_and_wordmark.svg";
import Figma from "../public/figma_vector.svg";
import Next from "../public/Nextjs-logo.svg";
import Typescript from "../public/Typescript_logo_2020.svg";
import Vercel from "../public/vercel.svg";
import nestjs from "../public/nestjs.svg";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Skills = () => {
  /*
   *   Skill 타이틀 애니메이션
   */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".skill__title1", {
      backgroundPositionX: "0%",
      stagger: 1,
      scrollTrigger: {
        trigger: ".skill__title1",
        scrub: 1,
        start: "top 50%",
        end: "bottom 50%",
      },
    });
    gsap.to(".skill__title2", {
      backgroundPositionX: "0%",
      stagger: 1,
      scrollTrigger: {
        trigger: ".skill__title2",
        scrub: 1,
        start: "top 60%",
        end: "bottom 50%",
      },
    });
    gsap.to(".skill__title3", {
      backgroundPositionX: "0%",
      stagger: 1,
      scrollTrigger: {
        trigger: ".skill__title3",
        scrub: 1,
        start: "top 65%",
        end: "bottom 50%",
      },
    });
    gsap.to(".skill__title4", {
      backgroundPositionX: "0%",
      stagger: 1,
      scrollTrigger: {
        trigger: ".skill__title4",
        scrub: 1,
        start: "top 70%",
        end: "bottom 50%",
      },
    });
  }, []);

  return (
    <section className="skill-container">
      <div className="skill__wrapper container__default">
        <div className="skill__content">
          <div>
            <div className="skill__animation">
              <p className="skill__title1 skill__title">Frontend Skills</p>
            </div>
            <div className="skill__about">
              <div className="skill__img-wrapper">
                <div className="skill__partition">
                  <div className="skill__mobile-partition">
                    <div className="skill__img">
                      <div className="skill__img-height">
                        <Image src={HTML} alt="html" />
                      </div>
                      <p className="skill__skilltext">HTML</p>
                    </div>
                    <div className="skill__img">
                      <div className="skill__img-height">
                        <Image
                          src="/CSS3.png"
                          alt="css"
                          width="58"
                          height="80"
                        />
                      </div>
                      <p className="skill__skilltext">CSS</p>
                    </div>
                    <div className="skill__img">
                      <div className="skill__img-height">
                        <Image
                          src="/JavaScript-logo.png"
                          alt="JS"
                          width="80"
                          height="80"
                        />
                      </div>
                      <p className="skill__skilltext">Javascript</p>
                    </div>
                    <div className="skill__img">
                      <div className="skill__img-height">
                        <Image src={Typescript} alt="Ts" />
                      </div>
                      <p className="skill__skilltext">Typescript</p>
                    </div>
                  </div>
                  <div className="skill__mobile-partition">
                    <div className="skill__img">
                      <div className="skill__img-height">
                        <Image
                          src="/React.png"
                          alt="REACT"
                          fill
                          sizes="80px, auto"
                        />
                      </div>
                      <p className="skill__skilltext">React</p>
                    </div>
                    <div className="skill__img">
                      <div className="skill__img-height">
                        <Image
                          src="/redux.png"
                          alt="redux"
                          fill
                          sizes="80px, auto"
                        />
                      </div>
                      <p className="skill__skilltext">Redux</p>
                    </div>
                    <div className="skill__img">
                      <div className="skill__img-height">
                        <Image
                          src="/Vue.png"
                          alt="VUE.js"
                          width="80"
                          height="80"
                        />
                      </div>
                      <p className="skill__skilltext">Vue</p>
                    </div>
                    <div className="skill__img">
                      <div className="skill__img-height">
                        <Image
                          src="/vuex.png"
                          alt="VUEX"
                          fill
                          sizes="80px, auto"
                        />
                      </div>
                      <p className="skill__skilltext">Vuex</p>
                    </div>
                  </div>
                </div>
                <div className="skill__partition">
                  <div className="skill__mobile-partition">
                    <div className="skill__img">
                      <div className="skill__img-height">
                        <Image src={Next} alt="Next" />
                      </div>
                      <p className="skill__skilltext">Next.js</p>
                    </div>
                    <div className="skill__img">
                      <div className="skill__img-height">
                        <Image src="/sass.png" alt="SASS" fill sizes="auto" />
                      </div>
                      <p className="skill__skilltext">SASS</p>
                    </div>
                    <div className="skill__img">
                      <div className="skill__img-height">
                        <Image
                          src="/bootstrap.png"
                          alt="Bootstrap"
                          width="80"
                          height="80"
                        />
                      </div>
                      <p className="skill__skilltext">Bootstrap</p>
                    </div>
                    <div className="skill__img">
                      <div className="skill__img-height">
                        <Image
                          src="/tailwind.png"
                          alt="tailwindcss"
                          fill
                          sizes="80px, auto"
                        />
                      </div>
                      <p className="skill__skilltext">TailwindCSS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="skill__animation">
              <p className="skill__title2 skill__title">Backend Skills</p>
            </div>
            <div className="skill__about">
              <div className="skill__img-wrapper">
                <div className="skill__mobile-partition">
                  <div className="skill__img">
                    <div className="skill__img-height">
                      <Image
                        src="/spring.png"
                        alt="spring"
                        width="80"
                        height="80"
                      />
                    </div>
                    <p className="skill__skilltext">SpringBoot</p>
                  </div>
                  <div className="skill__img">
                    <div className="skill__img-height">
                      <Image
                        src="/mysql.png"
                        alt="mysql"
                        width="80"
                        height="80"
                      />
                    </div>
                    <p className="skill__skilltext">MySQL</p>
                  </div>
                  <div className="skill__img">
                    <div className="skill__img-height">
                      <Image
                        src="/postgresql.png"
                        alt="lightsail"
                        width="80"
                        height="80"
                      />
                    </div>
                    <p className="skill__skilltext">PostgreSQL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="skill__animation">
              <p className="skill__title3 skill__title">Deployment Skills</p>
            </div>
            <div className="skill__about">
              <div className="skill__img-wrapper">
                <div className="skill__mobile-partition">
                  <div className="skill__img">
                    <div className="skill__img-height">
                      <Image src={Vercel} alt="vercel" width="80" height="80" />
                    </div>
                    <p className="skill__skilltext">Vercel</p>
                  </div>
                  <div className="skill__img">
                    <div className="skill__img-height">
                      <Image
                        src="/lightsail.png"
                        alt="lightsail"
                        width="80"
                        height="80"
                      />
                    </div>
                    <p className="skill__skilltext">AWS Lightsail</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="skill__animation">
              <p className="skill__title4 skill__title">Other Skills</p>
            </div>
            <div className="skill__about">
              <div className="skill__img-wrapper">
                <div className="skill__partition">
                  <div className="skill__mobile-partition">
                    <div className="skill__img">
                      <div className="skill__img-height">
                        <Image
                          src="/Adobe_Illustrator_CC_icon.svg.png"
                          alt="ai"
                          fill
                          sizes="80px, auto"
                        />
                      </div>
                      <p className="skill__skilltext">Illustrator</p>
                    </div>
                    <div className="skill__img">
                      <div className="skill__img-height">
                        <Image src={Figma} alt="Figma" width="80" height="80" />
                      </div>
                      <p className="skill__skilltext">Figma</p>
                    </div>
                    <div className="skill__img">
                      <div className="skill__img-height">
                        <Image
                          src="/Adobe_XD_CC_icon.svg.png"
                          alt="xd"
                          fill
                          sizes="80px, auto"
                        />
                      </div>
                      <p className="skill__skilltext">XD</p>
                    </div>
                  </div>
                  <div className="skill__mobile-partition">
                    <div className="skill__img">
                      <div className="skill__img-height">
                        <Image
                          src="/Git.png"
                          alt="git"
                          width="80"
                          height="80"
                        />
                      </div>
                      <p className="skill__skilltext">Git</p>
                    </div>
                    <div className="skill__img">
                      <div className="skill__img-height">
                        <Image
                          src="/githubLogo.png"
                          alt="github"
                          width="80"
                          height="80"
                        />
                      </div>
                      <p className="skill__skilltext">Github</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
