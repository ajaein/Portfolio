import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import commonStyles from "@/styles/common.module.scss";
import styles from "./skills.module.scss";

interface SkillItemProps {
  src: string;
  alt: string;
  text: string;
  width?: number;
  height?: number;
}

const SkillItem = ({
  src,
  alt,
  text,
  width = 80,
  height = 80,
}: SkillItemProps) => (
  <div className={styles.skillImg}>
    <div className={styles.skillImgHeight}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ objectFit: "contain" }}
      />
    </div>
    <p className={styles.skillText}>{text}</p>
  </div>
);

interface SkillSectionProps {
  title: string;
  titleClass: string;
  skills: SkillItemProps[];
}
const SkillSection = ({ title, titleClass, skills }: SkillSectionProps) => {
  return (
    <div>
      <div className={styles.skillAnimation}>
        <p className={`${styles[titleClass]} ${styles.skillTitle}`}>{title}</p>
      </div>
      <div className={styles.skillAbout}>
        <div className={styles.skillImgWrapper}>
          <div className={styles.skillPartition}>
            <div className={styles.skillMobilePartition}>
              {skills.map((skill, index) => (
                <SkillItem key={index} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  /*
   *   Skill 타이틀 애니메이션
   */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    setTimeout(() => {
      const titles = [
        document.querySelector(`.${styles.skillTitle1}`),
        document.querySelector(`.${styles.skillTitle2}`),
        document.querySelector(`.${styles.skillTitle3}`),
        document.querySelector(`.${styles.skillTitle4}`),
      ];

      titles.forEach((title, index) => {
        if (title) {
          gsap.to(title, {
            backgroundPositionX: "0%",
            stagger: 1,
            scrollTrigger: {
              trigger: title,
              scrub: 1,
              start: `top ${50 + index * 5}%`,
              end: "bottom 50%",
            },
          });
        }
      });
    }, 0); // 약간의 지연을 줘서 요소가 렌더링될 시간을 확보합니다.
  }, []);

  const frontendSkills = [
    { src: "/HTML5_logo_and_wordmark.svg", alt: "HTML", text: "HTML" },
    { src: "/CSS3.png", alt: "CSS", text: "CSS", width: 60, height: 60 },
    { src: "/JavaScript-logo.png", alt: "JavaScript", text: "Javascript" },
    { src: "/Typescript_logo_2020.svg", alt: "Typescript", text: "Typescript" },
    { src: "/React.png", alt: "React", text: "React" },
    { src: "/Nextjs-logo.svg", alt: "Next.js", text: "Next.js" },
    { src: "/zustand.jpg", alt: "Zustand", text: "Zustand" },
    { src: "/storybook.svg", alt: "Storybook", text: "Storybook" },
    { src: "/zod.svg", alt: "Zod", text: "Zod" },
    {
      src: "/react-hook-form.png",
      alt: "React-Hook-Form",
      text: "React-Hook-Form",
    },
    {
      src: "/styled-components.png",
      alt: "Styled-Components",
      text: "Styled-Components",
    },
    { src: "/sass.png", alt: "SASS", text: "SASS" },
    { src: "/bootstrap.png", alt: "Bootstrap", text: "Bootstrap" },
    { src: "/tailwind.png", alt: "TailwindCSS", text: "TailwindCSS" },
  ];

  const backendSkills = [
    { src: "/spring.png", alt: "SpringBoot", text: "SpringBoot" },
    { src: "/nestjs.svg", alt: "NestJS", text: "NestJS" },
    // { src: "/postgresql.png", alt: "PostgreSQL", text: "PostgreSQL" },
  ];

  const deploymentSkills = [
    { src: "/vercel.svg", alt: "Vercel", text: "Vercel" },
    { src: "/lightsail.png", alt: "AWS Lightsail", text: "AWS Lightsail" },
  ];

  const otherSkills = [
    { src: "/Git.png", alt: "Git", text: "Git" },
    { src: "/githubLogo.png", alt: "Github", text: "Github" },
    { src: "/confluence.svg", alt: "Confluence", text: "Confluence" },
  ];

  return (
    <section className={styles.skillContainer}>
      <div
        className={`${styles.skillWrapper} ${commonStyles.containerDefault}`}
      >
        <div className={styles.skillContent}>
          <SkillSection
            title="Frontend Skills"
            titleClass="skillTitle1"
            skills={frontendSkills}
          />
          <SkillSection
            title="Backend Skills"
            titleClass="skillTitle2"
            skills={backendSkills}
          />
          <SkillSection
            title="Deployment Skills"
            titleClass="skillTitle3"
            skills={deploymentSkills}
          />
          <SkillSection
            title="Other Skills"
            titleClass="skillTitle4"
            skills={otherSkills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
