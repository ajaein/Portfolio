import { FC } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { portfolioSlide } from "../lib";
import { ImageSlide } from "./swiper-slide";

SwiperCore.use([Navigation, Pagination]);

interface props {
  onModal: () => void;
}

const MyPortfolio: FC<props> = ({ onModal }) => {
  return (
    <div className="portfolio modal">
      <div className="fixed">
        <div className="portfolio__header">
          <span>Portfolio Page / README.md</span>
          <button>
            <i className="bi bi-x portfolio__icon" onClick={onModal}></i>
          </button>
        </div>
      </div>
      <div className="portfolio__container">
        <div className="portfolio__wrapper">
          <ImageSlide className="" slide={portfolioSlide} />
          <div className="portfolio__content">
            <div className="portfolio__content-info">
              <p className="portfolio__content-info-name">
                개인 포트폴리오 사이트
              </p>
              <p className="portfolio__content-info-days">
                2022.11 · 개인 프로젝트
              </p>
              <p className="portfolio__content-info-tools">
                React &nbsp;|&nbsp; Next.js &nbsp;|&nbsp; Typescript
                &nbsp;|&nbsp; Sass
              </p>
              <p className="portfolio__content-info-days small">
                <span>주요 기능:</span> 프론트엔드 개발자 포트폴리오, Github및
                블로그 링크
              </p>
              <p className="portfolio__content-info-days small">
                <span>담당 파트: </span>
                <br />
                - React(Hooks) 및 Javascript ES6+ 문법을 사용한 정적 웹 페이지
                개발
                <br />
                - SCSS문법을 사용한 CSS관리
                <br />
                - 간단한 인터렉티브 웹 구현
                <br />
                - Next.js를 사용한 정적 웹 페이지의 서버사이드렌더링 경험
                <br />
                - 반응형 웹 페이지
                <br />- Vercel을 이용한 배포
              </p>
            </div>
            <div className="portfolio__content-ex">
              <p className="portfolio__content-ex-text">
                현재 접속 중인 사이트이며 포트폴리오 용도로 제작하였습니다.
                React로 작업한 첫 결과물이며, Next.js와 Typescript를 배워보기
                위해 도입해 봤습니다.
              </p>
              <p className="portfolio__content-ex-text">
                처음 도입하는 기술들이 많았던 프로젝트지만 이전에 Vue로
                프로젝트를 해본 경험이 있었기에 빠르게 배울 수 있었습니다.
                덕분에 새로운 기술을 배우고 적용하는 것에 대한 자신감이
                생겼습니다. 또, 자유롭게 인터랙티브 웹을 적용해 보면서
                애니메이션이 어떻게 구현되는지 배울 수 있었고, 반응형 웹
                페이지도 학습해 볼 수 있었기에 재밌었던 프로젝트입니다.
                <br />
                <br />
                마지막으로 Next.js와 호환이 좋은 Vercel을 이용해 처음으로 정적
                웹사이트의 배포를 경험해 볼 수 있었습니다.
              </p>
            </div>
          </div>
          <div className="portfolio__bottom">
            <div className="portfolio__bottom-links">
              <div className="portfolio__bottom-solve">
                <b>문제해결 및 메모</b>
              </div>
              <a
                href="https://wonderfulwonder.tistory.com/73"
                target="_blank"
                rel="noreferrer noopener"
              >
                Intersection Observer를 사용한 애니메이션 만들기
              </a>
              <br />
              <a
                href="https://wonderfulwonder.tistory.com/93"
                target="_blank"
                rel="noreferrer noopener"
              >
                모달창과 스크롤 고정
              </a>
              <br />
            </div>
            <div className="portfolio__bottom-links">
              <b>Github: &nbsp;</b>
              <a
                href="https://github.com/k1k2brz/my-portfolio"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://github.com/k1k2brz/my-portfolio
              </a>
            </div>
            <div className="portfolio__bottom-links">
              <b>Link: &nbsp;</b>
              <a
                href="https://my-portfolio-lkp8.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://my-portfolio-lkp8.vercel.app/
              </a>
            </div>
            <div className="portfolio__bottom-links">
              <div style={{ marginTop: 25 }}>
                <b>Install JavaScript Packages</b>
              </div>
              <p>- npm install</p>
              <div style={{ marginTop: 10 }}>
                <b>Run Frontend Server</b>
              </div>
              <p>- npm run dev</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
