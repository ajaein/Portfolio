import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { ModalProps } from "../../types";

const Translator = ({ onModal }: ModalProps) => {
  return (
    <article className="portfolio modal">
      <div className="fixed">
        <div className="portfolio__header">
          <span>Others / README.md</span>
          <button onClick={onModal}>
            <i className="bi bi-x portfolio__icon" />
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
                  className="swiperImg"
                  src="/porfolio_img/gpttranslator.PNG"
                  alt="gpt-01"
                  width="800"
                  height="500"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  className="swiperImg"
                  src="/porfolio_img/gpttranslator02.PNG"
                  alt="gpt-02"
                  width="800"
                  height="500"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  className="portfolio__img-02"
                  src="/porfolio_img/springcrud.PNG"
                  alt="springcrud-01"
                  width="600"
                  height="318"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="portfolio__content">
            <div className="portfolio__content-info">
              <p className="contentInfoName">
                Spring Board (CRUD)
              </p>
              <p className="contentInfoDays">
                2023.06 · 개인 프로젝트
              </p>
              <span className="contentInfoTools">
                Javascript &nbsp;|&nbsp; JQuery &nbsp;|&nbsp; Java &nbsp;|&nbsp;
                Spring &nbsp;|&nbsp; PostgreSQL
              </span>
              <p className="contentInfoDays small">
                <span>주요 기능:</span>
                <br />
                - 기본적인 게시판 CRUD
                <br />
                - 작성자, 제목, 내용, 작성기간에 대한 검색기능
                <br />
                - 게시글 개수에 따른 페이지네이션
                <br />
                - 조회수 카운팅
                <br />- 비밀번호 체크
              </p>
            </div>
            <div className="contentEx">
              <p className="contentExText">
                <span>
                  Spring의 기본 기능을 학습하기 위해 JSP를 사용한 CRUD를
                  만들었습니다.
                </span>
                <br />
                <br />
                <span>백엔드의 작동 방식을 이해할 수 있게 되었습니다.</span>
                <br />
                여태까지 백엔드와 프론트엔드를 전부 맡아서 프로젝트를 해본
                경험이 없었는데, 이 프로젝트 덕분에 Spring의 구조를 이해하고
                소스 코드를 읽을 수 있게 되었습니다. 이뿐만 아니라 여태까지
                ORM을 사용하면서 쿼리문이 어떻게 작성될지 예상할 수 없어서
                어려웠던 부분들이 이해가 되기 시작했다는 성취를 얻었습니다.
                <br />
                이번 작업에서는 퍼블리싱 없이 백엔드부터 만들어 나가는 과정을
                익힐 수 있었습니다. 덕분에 협업 시 전보다 수월한 커뮤니케이션을
                할 수 있겠다는 생각이 들었습니다
                <br />
              </p>
            </div>
          </div>
          <div className="portfolio__bottom">
            {/* <div className="portfolioBottomLinks">
                            <div className='portfolioBottomSolve'>
                                <b>문제해결 및 메모</b>
                            </div>
                            <a href="https://wonderfulwonder.tistory.com/81"
                                target="_blank" rel="noreferrer noopener">준비중</a>
                            <br />
                        </div> */}
            <div className="portfolioBottomLinks">
              <div style={{ marginTop: 10 }}>
                <b>프로젝트 Github</b>
              </div>
              <a
                href="https://github.com/k1k2brz/Board"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://github.com/k1k2brz/Board
              </a>
              <br />
              <div className="portfolioBottomLinks">
                <div style={{ marginTop: 25 }}>
                  <b>Run Eclipse Tomcat Server</b>
                </div>
                <p>- Tomcat v9.0 Server 선택 후 Start the server</p>
              </div>
            </div>
          </div>
          <div className="portfolio__content">
            <div className="portfolio__content-info">
              <p className="contentInfoName">chatGPT Translator</p>
              <p className="contentInfoDays">
                2023.04 · 팀 프로젝트
              </p>
              <span className="contentInfoTools">
                Javascript &nbsp;|&nbsp; CSS &nbsp;|&nbsp; Django
              </span>
              <p className="contentInfoDays small">
                <span>주요 기능:</span>
                <br />
                - chatGPT API를 사용한 번역 (10개 언어)
                <br />
                - History API를 사용한 이전 번역 저장
                <br />- 사용자가 on/off를 설정할 수 있는 다크 모드
              </p>
              <p className="contentInfoDays small">
                <span>담당 파트: </span>
                프론트엔드 담당
                <br />
                - Javascript ES6+를 사용한 개발
                <br />
                - chatGPT API 번역 기능 관련 프론트 작업
                <br />
                - 다크 모드 개발
                <br />
                - Baffle을 사용한 애니메이션
                <br />
              </p>
            </div>
            <div className="contentEx">
              <p className="contentExText">
                <span>
                  OpenAI에서 공개된 GPT의 API를 사용해 만든 번역기
                  프로젝트입니다. chatGPT를 사용해 본 적 없는 사람들도 쉽게
                  이용할 수 있도록 작업했으며, GPT의 번역 진행 상황을 볼 수 있게
                  만들어 사용자의 흥미를 유발할 수 있도록 제작했습니다.
                </span>
                <br />
                <br />
                <span>기본기를 다시 복습할 수 있었습니다.</span>
                <br />
                Javascript의 기본기를 다시 공부하면서 시작한 프로젝트이기에
                놓치고 있던 부분들을 다시 한 번 되새길 수 있었습니다.
                <br />
                평소에 라이브러리로 사용했던 기능들을 Vanilla Javascript로
                구현하면 어떤 원리로 작동하는지 체험해볼 수 있었습니다.
                <br />
                React나 Vue에서 주어지는 포맷, 컴포넌트 단위의 작성법, DOM의
                변화를 직접 관리할 일이 거의 없는 것 등 생산성에 많은 도움을
                받고 있다는 걸 느꼈고 원리를 아는게 중요하다는 사실을
                배웠습니다.
                <br />
              </p>
            </div>
          </div>
          <div className="portfolio__bottom">
            <div className="portfolioBottomLinks">
              <div className="portfolioBottomSolve">
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
            </div>
            <div className="portfolioBottomLinks">
              <div style={{ marginTop: 10 }}>
                <b>프로젝트 Github</b>
              </div>
              <a
                href="https://github.com/k1k2brz/gpt_translator"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://github.com/k1k2brz/gpt_translator
              </a>
              <br />
            </div>
            <div className="portfolioBottomLinks" style={{ marginTop: 10 }}>
              <b>팀원 Github</b>
            </div>
            <div className="portfolioBottomLinks">
              <span>이태일 (Frontend): &nbsp;</span>
              <a
                href="https://github.com/k1k2brz"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://github.com/k1k2brz
              </a>
            </div>
            <div className="portfolioBottomLinks">
              <span>홍승식 (Backend): &nbsp;</span>
              <a
                href="https://github.com/hkp1030"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://github.com/hkp1030
              </a>
            </div>
            <div className="portfolioBottomLinks">
              <div style={{ marginTop: 25 }}>
                <b>Install Django and Python Packages</b>
              </div>
              <p>- pip install --upgrade pip</p>
              <p>- pip install -r requirements.txt</p>
              <div style={{ marginTop: 10 }}>
                <b>Run Django Server</b>
              </div>
              <p>- python manage.py runserver</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Translator;
