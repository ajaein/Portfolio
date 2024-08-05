import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect } from "react";

interface props {
  onBlogModal: () => void;
}

const MyBlog = ({ onBlogModal }: props) => {
  // 현재 제작중인 컨텐츠

  return (
    <article className="portfolio modal">
      <div className="fixed">
        <div className="portfolio__header">
          <span>My Blog / README.md</span>
          <button>
            <i className="bi bi-x portfolio__icon" onClick={onBlogModal}></i>
          </button>
        </div>
      </div>
      <div className="portfolio__container">
        <div className="portfolio__wrapper">
          {/* <div className="portfolio__img">
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
                  src="/porfolio_img/wait.PNG"
                  alt="slide-01"
                  width="800"
                  height="500"
                />
              </SwiperSlide>
            </Swiper>
          </div> */}
          <div className="portfolio__content">
            <div className="portfolio__content-info">
              <p className="portfolio__content-info-name">
                My Blog (Nest-Blog)
              </p>
              <p className="portfolio__content-info-days">
                2023.05 · 개인 프로젝트
              </p>
              <span className="portfolio__content-info-tools">
                React &nbsp;|&nbsp; React-Query &nbsp;|&nbsp; Typescript
                &nbsp;|&nbsp; Next.js &nbsp;|&nbsp; Styped-Components
              </span>
              <span className="portfolio__content-info-tools">
                Nest.js &nbsp;|&nbsp; PostgreSQL &nbsp;|&nbsp; TypeORM
              </span>
              {/* <span className="portfolio__content-info-tools">AWS</span> */}
              {/* <p className="portfolio__content-info-days small">
                <span>주요 기능:</span>
                <br />
                - 로그인한 유저만 작성할 수 있는 댓글기능
                <br />
                - 게시글 비공개 기능
                <br />- 사용자가 on/off를 설정할 수 있는 다크 모드
              </p> */}
              {/* <p className="portfolio__content-info-days small">
                <span>담당 파트: </span>
                전체 담당
              </p> */}
            </div>
            <div className="portfolio__content-ex">
              <p className="portfolio__content-ex-text">
                <span>제작중입니다.</span>
              </p>
            </div>
          </div>
          <div className="portfolio__bottom">
            {/* <div className="portfolio__bottom-links">
              <div className="portfolio__bottom-solve">
                <b>문제해결 및 메모</b>
              </div>
              <a
                href="https://wonderfulwonder.tistory.com/81"
                target="_blank"
                rel="noreferrer noopener"
              >
                번역 언어선택 만들기 (커스텀 셀렉트)
              </a>
              <br />
            </div> */}
            <div className="portfolio__bottom-links">
              <div style={{ marginTop: 10 }}>
                <b>프로젝트 Github</b>
              </div>
              <a
                href="https://github.com/k1k2brz/k1k2brz-Blog"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://github.com/k1k2brz/k1k2brz-Blog
              </a>
              <br />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MyBlog;
