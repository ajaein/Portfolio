import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { decommiSlide } from "../lib";
import { ImageSlide } from "./swiper-slide";

SwiperCore.use([Navigation, Pagination]);

interface props {
  onModal: () => void;
}

const Decommi = ({ onModal }: props) => {
  return (
    <div className="portfolio modal">
      <div className="fixed">
        <div className="portfolio__header">
          <span>Decommi - Privacy Diary / README.md</span>
          <button>
            <i className="bi bi-x portfolio__icon" onClick={onModal}></i>
          </button>
        </div>
      </div>
      <div className="portfolio__container">
        <div className="portfolio__wrapper">
          <ImageSlide
            className="portfolio__img-01"
            slide={decommiSlide}
          />
          <div className="portfolio__content">
            <div className="portfolio__content-info">
              <p className="portfolio__content-info-name">
                Decommi - SNS 프라이버시 다이어리
              </p>
              <p className="portfolio__content-info-days">
                2022.08~2022.10 · 4인 팀 프로젝트
              </p>
              <div className="portfolio__content-info-days">
                <span className="portfolio__content-info-tools">
                  Vue &nbsp;|&nbsp; Vuex &nbsp;|&nbsp; Bootstrap5 &nbsp;|&nbsp;
                  Sass
                </span>
                <span className="portfolio__content-info-tools">
                  &nbsp;|&nbsp; Java &nbsp;|&nbsp; SpringBoot &nbsp;|&nbsp;
                  MariaDB{" "}
                </span>
              </div>
              <p className="portfolio__content-info-days small">
                <span>주요 기능:</span> 사용자 및 게시판, 댓글 CRUD, 선호
                태그리스트, 북마크, 신고, 검색, 관리자페이지
              </p>
              <p className="portfolio__content-info-days small">
                <span>담당 파트: </span>
                관리자 페이지의 일부를 제외한 프론트엔드 전체를 담당 (주요기능
                전부)
                <br />
                - Vue3의 Composition API와 Javascript ES6+를 사용한 개발
                <br />
                - Vuex를 이용한 전역 상태관리
                <br />
                - Sass를 사용한 CSS 관리 및 퍼블리싱
                <br />
                - CK Editor를 이용한 게시판 구현 및 댓글 공개-비공개처리
                <br />
                - HTTP 통신 및 REST API 서버 연동
                <br />
                - Bootstrap5를 사용한 UI개발
                <br />- Figma를 사용한 전체 디자인
              </p>
            </div>
            <div className="portfolio__content-ex">
              <p className="portfolio__content-ex-text">
                <span>
                  인터넷의 발달로 SNS에 올리는 개인의 사생활이 모두의 사생활처럼
                  공개되는 것에 피로감을 느끼는 사람들을 위한 다이어리를
                  익명으로 작성하여 일상적인 소통을 할 수 있는 SNS입니다.
                </span>
                <br />
                <br />
                팀원들과의 의논 끝에 문법이 통일되어 있는 Vue가 작업에 수월할 것
                같아 Vue를 선택하였으며 상태와 변이를 중앙 집중화하여 관리해서
                보다 효율적으로 작업하기 위해 Vuex를 사용하였습니다. 또,
                디자인을 Figma로 만든 뒤 코드로 구현하는 작업이 많았기 때문에
                CSS문법의 가독성을 올리고 유지보수를 빠르게 하기 위해 SASS를
                사용했습니다. 하지만 몇몇 modal이나 일부 input은 Bootstrap으로
                만들면서 진행했었습니다. CSS와 부트스트랩을 한 번에 사용하면
                디자인 커스텀이 어렵다는 걸 몰랐기 때문에 했던 선택이지만 이왕
                이렇게 된 거 Bootstrap의 사용법도 같이 익혀보자는 마인드로 일부
                컴포넌트를 Bootstrap의 인라인 스타일로 만들었습니다.
              </p>
              <p className="portfolio__content-ex-text">
                처음으로 웹을 만들어보면서 HTML, CSS, Javascript 등 프론트엔드의
                기본이 되는 언어와 웹 개발의 기본 지식을 쌓을 수 있었습니다.
                Vue를 사용하는 과정에서 Javascript 지식의 부재로 많은 어려움을
                겪었으며 쉽게 갈 수 있는 길을 어렵게 가기도 했는데, 특히
                여기저기서 게시판의 데이터를 불러올 때 비효율적인 작업을 많이
                하면서 더 쉽게 할 수 있을 것 같은데라는 생각과 동시에
                Javascript의 중요성을 많이 느꼈습니다. Vue를 하면서
                CkEditor(라이브러리) 파트를 제외한 모든 부분을 전부 Composition
                API로 작성했는데 그 이유는 앞으로 나올 Vue의 레퍼런스나
                라이브러리가 Composition API의 문법으로 작성될 거라
                생각해서입니다. 하지만 백엔드와 협의하에 사용한 CKEditor를
                Composition API로 변환하는데 실패해 LocalStorage까지 사용하며
                억지로 Options API와 섞여버린 부분이 아쉽습니다.
                <br />
                <br />
                그리고 프론트엔드와 백엔드가 서로의 작업을 잘 몰라서 생기는
                해프닝이 많아 작업 후반에는 디스코드로 서로의 코드를 리뷰해 주고
                서로 편하게 작업할 수 있도록 아예 차근차근 맞춰가며 협업을
                했습니다. 이때의 경험은 아 백엔드의 이런 부분들을 진작 알았으면
                좋았을 걸이라는 생각이 드는 부분이 많았습니다. 그래서 왜
                프론트엔드 개발자도 백엔드 지식이 필요한지, 그리고 웹에서
                요구하는 전체적인 개발 지식이 필요한지 이유를 알 수 있었습니다.
                <br />
                <br />
                이번 프로젝트를 통해 백엔드와 협업하는 과정에서 어떻게 교류를
                해야 하고 소통해야 하는지 수많은 시행착오를 겪으며 알 수 있었고,
                처음에 API를 어떻게 주고받는지 모르는 채로 UI를 구현했던 제가
                프론트파트를 끝까지 만들어냈다는 점에서 많은 성장을 이룰 수
                있었던 프로젝트입니다.
              </p>
              <p className="portfolio__content-ex-text"></p>
            </div>
          </div>
          <div className="portfolio__bottom">
            <div className="portfolio__bottom-links">
              <b>팀원 Github</b>
            </div>
            <div className="portfolio__bottom-links">
              <span>이태일 (Frontend): &nbsp;</span>
              <a
                href="https://github.com/k1k2brz"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://github.com/k1k2brz
              </a>
            </div>
            <div className="portfolio__bottom-links">
              <span>김형준 (Backend): &nbsp;</span>
              <a
                href="https://github.com/PorkbellyBigfan"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://github.com/PorkbellyBigfan
              </a>
            </div>
            <div className="portfolio__bottom-links">
              <span>박상민 (Backend): &nbsp;</span>
              <a
                href="https://github.com/psm418"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://github.com/psm418
              </a>
            </div>
            <div className="portfolio__bottom-links">
              <span>이준호 (Backend): &nbsp;</span>
              <a
                href="https://github.com/ZOONo-lee"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://github.com/ZOONo-lee
              </a>
            </div>
            <br />
            {/* <div className="portfolio__bottom-links">
                            <span>프로젝트 Github: &nbsp;</span>
                            <a href="https://github.com/k1k2brz/Decommi-pre"
                                target="_blank" rel="noreferrer noopener">&nbsp;&nbsp;https://github.com/k1k2brz/Decommi-pre</a>
                        </div>
                        <div className="portfolio__bottom-links">
                            <span>프로젝트 Notion: &nbsp;</span>
                            <a href="https://decommi.notion.site/Decommi-54b1b7830f8545199a9f7c912e01f4bb"
                                target="_blank" rel="noreferrer noopener">&nbsp;&nbsp;https://decommi.notion.site/Decommi-54b1b7830f8545199a9f7c912e01f4bb</a>
                        </div> */}
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

export default Decommi;
