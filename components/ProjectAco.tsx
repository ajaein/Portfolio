import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

interface props {
  onModal: () => void;
}

function ProjectAco({ onModal }: props) {
  return (
    <div className="portfolio modal">
      <div className="fixed">
        <div className="portfolio__header">
          <span>A.C.O. / README.md</span>
          <button>
            <i className="bi bi-x portfolio__icon" onClick={onModal}></i>
          </button>
        </div>
      </div>
      <div className="portfolio__container">
        <div className="portfolio__wrapper">
          <div className="portfolio__img">
            <Swiper
              className="portfolio__img-swiper"
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide>
                <Image
                  className="portfolio__img-01"
                  src="/porfolio_img/aco01.PNG"
                  alt="aco-01"
                  width="800"
                  height="500"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  className="portfolio__img-01"
                  src="/porfolio_img/aco02.PNG"
                  alt="aco-02"
                  width="800"
                  height="500"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  className="portfolio__img-01"
                  src="/porfolio_img/aco03.PNG"
                  alt="aco-03"
                  width="800"
                  height="500"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  className="portfolio__img-01"
                  src="/porfolio_img/aco05.PNG"
                  alt="aco-05"
                  width="800"
                  height="500"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  className="portfolio__img-01"
                  src="/porfolio_img/aco06.PNG"
                  alt="aco-06"
                  width="800"
                  height="500"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  className="portfolio__img-01"
                  src="/porfolio_img/aco04.PNG"
                  alt="aco-04"
                  width="800"
                  height="500"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  className="portfolio__img-01"
                  src="/porfolio_img/aco07.PNG"
                  alt="aco-07"
                  width="800"
                  height="500"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  className="portfolio__img-01"
                  src="/porfolio_img/aco08.PNG"
                  alt="aco-08"
                  width="800"
                  height="500"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="portfolio__content">
            <div className="portfolio__content-info">
              <p className="portfolio__content-info-name">
                ACO - Advance the Ecology
              </p>
              <p className="portfolio__content-info-days">
                2022.12 ~ 2023.01 · 팀 프로젝트
              </p>
              <span className="portfolio__content-info-tools">
                React &nbsp;|&nbsp; Typescript &nbsp;|&nbsp; Redux-Toolkit
                &nbsp;|&nbsp; Next.js &nbsp;|&nbsp; Tailwindcss &nbsp;|&nbsp;
                flowbite &nbsp;
              </span>
              <span className="portfolio__content-info-tools">
                Java &nbsp;|&nbsp; SpringBoot &nbsp;|&nbsp; Redis &nbsp;|&nbsp;
                MySQL &nbsp;|&nbsp; Docker{" "}
              </span>
              <span className="portfolio__content-info-tools">
                AWS Lightsail
              </span>
              <p className="portfolio__content-info-days small">
                <span>주요 기능:</span> 사용자 및 게시판, 채팅, 댓글 CRUD, 태그,
                좋아요, 신고, 검색, 관리자페이지, 이미지 첨부
              </p>
              <p className="portfolio__content-info-days small">
                <span>담당 파트: </span>
                회원가입과 신고를 제외한 프론트엔드 전체 담당(위의 주요 기능
                전부) 및 백엔드 비밀번호 수정 및 좋아요 기능 담당
                <br />
                React(Hooks)와 Javascript ES6+ 문법을 사용한 UI개발
                <br />
                Redux-toolkit을 사용한 상태관리
                <br />
                Next.js를 사용한 동적 웹 페이지의 SSR
                <br />
                TailwindCSS을 사용한 디자인과 퍼블리싱
                <br />
                반응형 웹
                <br />
                StompJS와 SockJS를 사용한 채팅 구현
                <br />
                Java, Spring Framework를 사용한 REST API활용 Web개발 및 서버
                연동
                <br />
                AWS Lightsail을 사용한 프론트엔드 파트 배포
              </p>
            </div>
            <div className="portfolio__content-ex">
              <p className="portfolio__content-ex-text">
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
                또, Typescript를 공부하면서 any타입을 최대한 줄일 수 있었고,
                Next.js 기능들을 최대한 활용해 동적 라우팅이나 SSR을 구현할 수
                있었습니다.
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
                하지만 이번에는 문제 해결, 어려웠던 부분, 공부했던 부분들을
                프로젝트 전후에 블로그에 기록했습니다. 덕분에 유사한 문제에
                직면했을 때 훨씬 수월하게 해결할 수 있었고, 기본기 향상에도
                도움이 되었습니다.
                <br />
                그리고 일주일 단위로 프로젝트 계획을 수립하고 매일 디스코드로
                어떤 파트를 진행할지 주고받으며 프로젝트의 진행도를 파악했기에
                협업도 훨씬 효율적으로 진행할 수 있었습니다.
                <br />
                <br />
                <span>
                  백엔드를 함께 공부하면서 웹 개발에 대한 이해도가 높아졌습니다.
                </span>
                <br />
                이전 프로젝트를 할 때 백엔드에 대한 이해도가 낮아서 팀원들과의
                소통에 어려움을 겪었던 기억이 있습니다. <br />
                그래서 이번 프로젝트는 원활한 소통, 그리고 공부를 위해
                조금이지만 백엔드 작업을 맡아서 했습니다. 덕분에 SpringBoot에
                대한 두려움을 조금이나마 극복할 수 있었고, 전체적으로 이해가 잘
                안갔던 부분들이 어느 정도 정리가 됨으로써 소통을 빠르게 할 수
                있었기에 작업 효율이 올랐으며 웹 개발에 대한 자신감도
                붙었습니다.
                <br />
                그리고 AWS lightsail을 사용해 프론트단의 배포를 해봄으로써
                기획부터 배포까지 모든 사이클을 경험해 볼 수 있었습니다.
                <br />
                <br />
                <span>아쉬운 점</span>
                <br />
                Git을 사용한 협업을 경험해 본건 좋았지만 Github Actions을 통한
                CI/CD를 경험하지 못했던 점.
                <br />
                SEO의 과정중 도메인 최적화 작업을 경험하지 못해 검색엔진에
                노출되는 정도를 확인하지 못한 점.
                <br />
                백엔드 파트에 좀 더 많이 참여하지 못한 점.
                <br />
              </p>
            </div>
          </div>
          <div className="portfolio__bottom">
            <div className="portfolio__bottom-links">
              <div style={{ marginTop: 10 }}>
                <b>홈페이지</b>
              </div>
              {/* <a href="http://43.200.152.148:3075/"
                                target="_blank" rel="noreferrer noopener">ACO 홈페이지 바로가기</a>
                            <br /> */}
              <div className="portfolio__bottom-solve">
                <b>문제해결 및 메모</b>
              </div>
              <a
                href="https://wonderfulwonder.tistory.com/14"
                target="_blank"
                rel="noreferrer noopener"
              >
                Next.js의 CORS에러
              </a>
              <br />
              <a
                href="https://wonderfulwonder.tistory.com/17"
                target="_blank"
                rel="noreferrer noopener"
              >
                FormData사용시 FileReader로 이미지 리스트 만들기
              </a>
              <br />
              <a
                href="https://wonderfulwonder.tistory.com/16"
                target="_blank"
                rel="noreferrer noopener"
              >
                검색 구현을 위한 Reducer사용
              </a>
              <br />
              <a
                href="https://wonderfulwonder.tistory.com/95"
                target="_blank"
                rel="noreferrer noopener"
              >
                Sock.js와 Stomp.js를 사용한 채팅 구현
              </a>
              <br />
              <a
                href="https://wonderfulwonder.tistory.com/22"
                target="_blank"
                rel="noreferrer noopener"
              >
                tailwindCSS사용시 Next의 SSR이 동작하지 않는 경우
              </a>
              <br />
              <a
                href="https://wonderfulwonder.tistory.com/20"
                target="_blank"
                rel="noreferrer noopener"
              >
                AWS Llightsail에서 Burstable Zone을 넘어갔을 때의 Swap
                Memory사용
              </a>
            </div>
            {/* <div className="portfolio__bottom-links">
                            <div style={{ marginTop: 10 }}>
                                <b>프로젝트 Github</b>
                            </div>
                            <span>Frontend: &nbsp;</span>
                            <a href="https://github.com/TEAM-ACO/aco-front"
                                target="_blank" rel="noreferrer noopener">https://github.com/TEAM-ACO/aco-front</a>
                            <br />
                            <span>Backend: &nbsp;</span>
                            <a href="https://github.com/TEAM-ACO/aco-back"
                                target="_blank" rel="noreferrer noopener">https://github.com/TEAM-ACO/aco-back</a>
                        </div> */}
            <div style={{ marginTop: 10 }}>
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
              <span>변현석 (Backend): &nbsp;</span>
              <a
                href="https://github.com/B-HS"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://github.com/B-HS
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
}

export default ProjectAco;
