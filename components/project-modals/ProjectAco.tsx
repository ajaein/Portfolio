import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React from "react";
import { type ModalProps } from "@/types";
import Wrapper from "./ui/Wrapper";
import Outline from "./ui/Outline";
import { ImageSlide } from "./ui/ImageSlide";
import { acoLink, acoSlide } from "@/lib/configs";
import Urls from "./ui/Urls";

import styles from "./project-modals.module.scss";
import Tools from "./ui/Tools";

const frontend = [
  {
    title: "https://github.com/k1k2brz",
    link: "https://github.com/k1k2brz",
  },
];
const backendBHS = [
  {
    title: "https://github.com/B-HS",
    link: "https://github.com/B-HS",
  },
];
const backendKHJ = [
  {
    title: "https://github.com/PorkbellyBigfan",
    link: "https://github.com/PorkbellyBigfan",
  },
];

const frontendTools = [
  "React",
  "Typescript",
  "Redux-Toolkit",
  "Next.js(12)",
  "Tailwindcss",
  "flowbite",
];

const backendTools = ["Java", "SpringBoot", "Redis", "MySQL", "Docker"];

function ProjectAco({ onModal }: ModalProps) {
  return (
    <Wrapper title="A.C.O. / README.md" onModal={onModal}>
      <Outline slide={<ImageSlide slide={acoSlide} />}>
        <p className={styles.contentInfoName}>ACO - Advance the Ecology</p>
        <p className={styles.contentInfoName}>(리팩토링 예정)</p>
        <p className={styles.contentInfoDays}>
          2022.12 ~ 2023.01 · 팀 프로젝트
        </p>
        <Tools tools={frontendTools} />
        <Tools tools={backendTools} />
        <Tools tools={["AWS Lightsail"]} />
        <p className={`${styles.contentInfoDays} ${styles.small}`}>
          <span>주요 기능:</span> 사용자 및 게시판, 채팅, 댓글 CRUD, 태그,
          좋아요, 신고, 검색, 관리자페이지, 이미지 첨부
        </p>
        <span className={`${styles.contentInfoDays} ${styles.small}`}>
          <span>담당 파트: </span>
          회원가입과 신고를 제외한 프론트엔드 전체 담당(위의 주요 기능 전부) 및
          백엔드 비밀번호 수정 및 좋아요 기능 담당
          <ul>
            <li>- React(Hooks)와 Javascript ES6+ 문법을 사용한 UI개발</li>
            <li>- Redux-toolkit을 사용한 상태관리</li>
            <li>- Next.js를 사용한 동적 웹 페이지의 SSR</li>
            <li>- TailwindCSS을 사용한 디자인과 퍼블리싱</li>
            <li>- 반응형 웹</li>
            <li>- StompJS와 SockJS를 사용한 채팅 구현</li>
            <li>
              - Java, Spring Framework를 사용한 REST API활용 Web개발 및 서버
              연동
            </li>
            <li>- AWS Lightsail을 사용한 프론트엔드 파트 배포</li>
          </ul>
        </span>

        <div className={styles.contentEx}>
          <p className={styles.contentExText}>
            <span>
              ACO는 환경보호를 위한 기록 커뮤니티라는 주제로 간단한 분리수거
              방법부터 친환경 Tip이나 제로 웨이스트, 미니멀 라이프 등 나의
              발자취를 기록하고 공유하는 공간입니다.
            </span>
            <br />
            <br />
            <span>
              이번 프로젝트는 빠르게 기능이나 기술 위주의 공부를 해보자는
              취지였기 때문에 사용하고 싶은 기술들을 다 도입했습니다.
              <br />
            </span>
            먼저 Redux-toolkit을 사용해 Redux + Redux-Saga 보다 보일러
            플레이트를 줄여 코드를 깔끔하게 하고 작업시간을 단축시켰습니다.
            <br />
            또, Typescript를 공부하면서 any타입을 최대한 줄일 수 있었고, Next.js
            기능들을 최대한 활용해 동적 라우팅이나 SSR을 구현할 수 있었습니다.
            <br />
            그리고 Tailwindcss와 UI 라이브러리인 flowbite까지 사용을 해보며
            디자인을 구현해 봤으며, 처음으로 SockJs와 StompJS를 이용해 채팅
            기능을 만들어 볼 수 있었습니다.
            <br />
            <br />
            <span>
              프로젝트를 진행 하면서 기록과 문서화의 중요성을 깨달았습니다.
            </span>
            <br />
            이전 프로젝트까지는 공부했던 코드들을 메모장에 짧게 기록하거나
            Github에 주석을 달아서 올리는 것 정도만 기록 했었습니다.
            <br />
            하지만 이번에는 문제 해결, 어려웠던 부분, 공부했던 부분들을 프로젝트
            전후에 블로그에 기록했습니다. 덕분에 유사한 문제에 직면했을 때 훨씬
            수월하게 해결할 수 있었고, 기본기 향상에도 도움이 되었습니다.
            <br />
            그리고 일주일 단위로 프로젝트 계획을 수립하고 매일 디스코드로 어떤
            파트를 진행할지 주고받으며 프로젝트의 진행도를 파악했기에 협업도
            훨씬 효율적으로 진행할 수 있었습니다.
            <br />
            <br />
            <span>
              백엔드를 함께 공부하면서 웹 개발에 대한 이해도가 높아졌습니다.
            </span>
            <br />
            이전 프로젝트를 할 때 백엔드에 대한 이해도가 낮아서 팀원들과의
            소통에 어려움을 겪었던 기억이 있습니다. <br />
            그래서 이번 프로젝트는 원활한 소통, 그리고 공부를 위해 조금이지만
            백엔드 작업을 맡아서 했습니다. 덕분에 SpringBoot에 대한 두려움을
            조금이나마 극복할 수 있었고, 전체적으로 이해가 잘 안갔던 부분들이
            어느 정도 정리가 됨으로써 소통을 빠르게 할 수 있었기에 작업 효율이
            올랐으며 웹 개발에 대한 자신감도 붙었습니다.
            <br />
            그리고 AWS lightsail을 사용해 프론트단의 배포를 해봄으로써 기획부터
            배포까지 모든 사이클을 경험해 볼 수 있었습니다.
            <br />
            <br />
            <span>아쉬운 점</span>
            <br />
            Git을 사용한 협업을 경험해 본건 좋았지만 Github Actions을 통한
            CI/CD를 경험하지 못했던 점.
            <br />
            SEO의 과정중 도메인 최적화 작업을 경험하지 못해 검색엔진에 노출되는
            정도를 확인하지 못한 점.
            <br />
            백엔드 파트에 좀 더 많이 참여하지 못한 점.
            <br />
          </p>
        </div>

        <div className={styles.portfolioBottom}>
          <div style={{ marginTop: 10 }}>
            <b>홈페이지</b>
          </div>
          <span>현재 배포가 중단되었습니다.</span>
          <Urls
            linkArray={acoLink}
            title="문제해결 및 메모"
            direction="column"
          />
          <div style={{ marginTop: 10 }}>
            <b>Github</b>
          </div>
          <Urls linkArray={frontend} title="이태일 (Frontend): " />
          <Urls linkArray={backendBHS} title="변현석 (backend): " />
          <Urls linkArray={backendKHJ} title="김형준 (backend): " />
          <div style={{ marginTop: 25 }}>
            <b>Install JavaScript Packages</b>
          </div>
          <p>- npm install</p>
          <div style={{ marginTop: 10 }}>
            <b>Run Local Server</b>
          </div>
          <p>- npm run dev</p>
        </div>
        {/* <div className="portfolioBottomLinks">
          <div style={{ marginTop: 10 }}>
            <b>프로젝트 Github</b>
          </div>
          <span>Frontend: &nbsp;</span>
          <a
            href="https://github.com/TEAM-ACO/aco-front"
            target="_blank"
            rel="noreferrer noopener"
          >
            https://github.com/TEAM-ACO/aco-front
          </a>
          <br />
          <span>Backend: &nbsp;</span>
          <a
            href="https://github.com/TEAM-ACO/aco-back"
            target="_blank"
            rel="noreferrer noopener"
          >
            https://github.com/TEAM-ACO/aco-back
          </a>
        </div> */}
      </Outline>
    </Wrapper>
  );
}

export default ProjectAco;
