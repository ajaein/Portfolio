import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { myPortfolioLink, portfolioSlide } from "@/lib/configs";
import { type ModalProps } from "@/types";
import Wrapper from "./ui/Wrapper";
import Outline from "./ui/Outline";
import { ImageSlide } from "./ui/ImageSlide";
import Urls from "./ui/Urls";

import styles from "./project-modals.module.scss";
import Tools from "./ui/Tools";

const github = [
  {
    title: "https://github.com/k1k2brz/my-portfolio",
    link: "https://github.com/k1k2brz/my-portfolio",
  },
];
const production = [
  {
    title: "https://my-portfolio-lkp8.vercel.app/",
    link: "https://my-portfolio-lkp8.vercel.app/",
  },
];

const frontendTools = [
  'React', 'Next.js', 'Typescript', 'Scss'
]

const MyPortfolio = ({ onModal }: ModalProps) => {
  return (
    <Wrapper title="Portfolio Page / README.md" onModal={onModal}>
      <Outline slide={<ImageSlide slide={portfolioSlide} />}>
        <p className={styles.contentInfoName}>개인 포트폴리오 사이트</p>
        <p className={styles.contentInfoDays}>2022.11 · 개인 프로젝트</p>
        <Tools tools={frontendTools} />
        <p className={`${styles.contentInfoDays} ${styles.small}`}>
          <span>주요 기능:</span> 프론트엔드 개발자 포트폴리오, Github및 블로그
          링크
        </p>
        <span className={`${styles.contentInfoDays} ${styles.small}`}>
          <span>담당 파트: </span>
          <ul>
            <li>
              - React(Hooks) 및 Javascript ES6+ 문법을 사용한 정적 웹 페이지
              개발
            </li>
            <li>- SCSS문법을 사용한 CSS관리</li>
            <li>- 간단한 인터렉티브 웹 구현</li>
            <li>- Next.js를 사용한 정적 웹 페이지의 서버사이드렌더링 경험</li>
            <li>- 반응형 웹 페이지- Vercel을 이용한 배포</li>
          </ul>
        </span>

        <div className={styles.contentEx}>
          <p className={styles.contentExText}>
            현재 접속 중인 사이트이며 포트폴리오 용도로 제작하였습니다. React로
            작업한 첫 결과물이며, Next.js와 Typescript를 배워보기 위해 도입해
            봤습니다.
          </p>
          <p className={styles.contentExText}>
            처음 도입하는 기술들이 많았던 프로젝트지만 이전에 Vue로 프로젝트를
            해본 경험이 있었기에 빠르게 배울 수 있었습니다. 덕분에 새로운 기술을
            배우고 적용하는 것에 대한 자신감이 생겼습니다. 또, 자유롭게
            인터랙티브 웹을 적용해 보면서 애니메이션이 어떻게 구현되는지 배울 수
            있었고, 반응형 웹 페이지도 학습해 볼 수 있었기에 재밌었던
            프로젝트입니다.
            <br />
            <br />
            마지막으로 Next.js와 호환이 좋은 Vercel을 이용해 처음으로 정적
            웹사이트의 배포를 경험해 볼 수 있었습니다.
          </p>
        </div>

        <div className={styles.portfolioBottom}>
          <Urls
            linkArray={myPortfolioLink}
            title="문제해결 및 메모"
            direction="column"
          />
          <Urls linkArray={github} title="Github: " />
          <Urls linkArray={production} title="Link: " />
          <div style={{ marginTop: 15 }}>
            <div>
              <b>Install JavaScript Packages</b>
            </div>
            <p>- npm install</p>
            <div style={{ marginTop: 10 }}>
              <b>Run Local Server</b>
            </div>
            <p>- npm run dev</p>
          </div>
        </div>
      </Outline>
    </Wrapper>
  );
};

export default MyPortfolio;
