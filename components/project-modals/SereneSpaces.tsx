import React from "react";
import Wrapper from "./ui/Wrapper";
import Outline from "./ui/Outline";
import { ImageSlide } from "./ui/ImageSlide";
import Tools from "./ui/Tools";
import { ModalProps } from "@/types";
import { sereneSpacesSlide } from "@/lib/configs";

import styles from "./project-modals.module.scss";
import Urls from "./ui/Urls";

const githubFront = [
  {
    title: "https://github.com/k1k2brz/serene-spaces-frontend",
    link: "https://github.com/k1k2brz/serene-spaces-frontend",
  },
];
const githubBack = [
  {
    title: "https://github.com/k1k2brz/serene-spaces-backend",
    link: "https://github.com/k1k2brz/serene-spaces-backend",
  },
];

const frontendTools = [
  "React",
  "Typescript",
  "Next.js(App Router)",
  "Zustand",
  "Tailwindcss",
  "Storybook",
  "Zod",
];

const backendTools = ["NestJS", "PostgreSQL"];

const SereneSpaces = ({ onModal }: ModalProps) => {
  return (
    <Wrapper title="Serene Spaces (제작중) / README.md" onModal={onModal}>
      <Outline slide={<ImageSlide slide={sereneSpacesSlide} />}>
        <p className={styles.contentInfoName}>Serene Spaces (제작중)</p>
        <p className={styles.contentInfoDays}>2024.9 ~ · 개인 프로젝트</p>
        <Tools tools={frontendTools} />
        <Tools tools={backendTools} />
        <p className={`${styles.contentInfoDays} ${styles.small}`}>
          <span>주요 기능:</span> 유저 CRUD, 상품 CRUD, 장바구니, 주문하기, 상품
          리뷰, 나머지 페이지 제작중
        </p>
        <span className={`${styles.contentInfoDays} ${styles.small}`}>
          <span>담당 파트: 전체</span>
          <ul>
            <li>- 이커머스의 기본적인 기능들 제작</li>
            <li>- React(Hooks)와 Javascript ES6+ 문법을 사용한 UI개발</li>
            <li>- Typescript를 사용해 타입 지정</li>
            <li>- Next.js를 사용한 동적 웹 페이지의 SSR</li>
            <li>- TailwindCSS을 사용한 디자인과 퍼블리싱</li>
            <li>- 반응형 웹</li>
            <li>- UI 공통 컴포넌트를 만들고 Storybook도입</li>
            <li>- NestJS를 사용한 백엔드단 제작</li>
          </ul>
        </span>

        <div className={styles.contentEx}>
          <p className={styles.contentExText}>
            <span>
              Serene Spaces는 평화로운 공간을 만들어주기 위한 소품샵입니다. 현재 제작중인 페이지입니다.
            </span>
            <br />
            <br />
            <span>
              이번 프로젝트는 NestJS를 학습하고, 프론트엔드에 대한 이해도를 더 높히기 위한 작업입니다.
              <br />
            </span>
          </p>
        </div>

        <div className={styles.portfolioBottom}>
          <div style={{ marginTop: 10 }}>
            <b>Github</b>
          </div>
          <Urls linkArray={githubFront} title="Frontend : " />
          <Urls linkArray={githubBack} title="Backend : " />
          <div style={{ marginTop: 25 }}>
            <b>Install JavaScript Packages</b>
          </div>
          <p>- npm install</p>
          <div style={{ marginTop: 10 }}>
            <b>Run Local Server</b>
          </div>
          <p>- npm run dev</p>
        </div>
      </Outline>
    </Wrapper>
  );
};

export default SereneSpaces;
