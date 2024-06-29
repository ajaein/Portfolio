import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  canvas: number | undefined;
};

const AboutMe = ({ canvas }: Props) => {
  const [ElementVisible, setElementVisible] = useState<boolean>(false);
  const [amAnime, setAmAnime] = useState<number>(0);
  const myRef = useRef<HTMLDivElement | null>(null);
  const aboutMe = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // 컨텐츠 Opacity조정을 위함
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      // console.log('entry', entry);
      setElementVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current as HTMLDivElement);
    // ref를 두개 선언하면 둘 다 인식이 되어 isIntersecting이 꼬인다
  }, []);

  /**
   * TEXT 좌우 이동 애니메이션
   */
  const abScroll = useCallback(() => {
    setAmAnime((window.scrollY - (canvas as number)) / 3);
  }, [canvas]);

  useEffect(() => {
    window.addEventListener("scroll", abScroll);
    return () => {
      window.removeEventListener("scroll", abScroll);
    };
  });

  return (
    <section className="am-container">
      <div className="am-area container__default">
        <div className="am-wrapper" ref={myRef}>
          <div
            className={
              ElementVisible
                ? "elem-visible am-content relative"
                : "elem-invisible am-content relative"
            }
          >
            <div ref={aboutMe} className="am-aboutme">
              <div style={{ transform: `translateX(${amAnime}px)` }}>
                About me
              </div>
            </div>
            <div className="am-about">
              <div className="am-infos">
                <div className="am-infos-icontext">
                  <div className="iconsize">
                    <p className="subtitle-text bi bi-person-fill"></p>
                  </div>
                  <p>이태일</p>
                </div>
                <div className="am-infos-icontext">
                  <div className="iconsize">
                    <p className="subtitle-text bi bi-calendar-event-fill"></p>
                  </div>
                  <p>1993.02.15</p>
                </div>
              </div>
              <div className="am-stroke" />
              <div className="am-infos">
                <div className="am-infos-icontext">
                  <div className="iconsize">
                    <p className="subtitle-text bi bi-telephone-fill"></p>
                  </div>
                  <p>010-4221-8622</p>
                </div>
                <div className="am-infos-icontext">
                  <div className="iconsize">
                    <p className="subtitle-text bi bi-envelope-fill"></p>
                  </div>
                  <p>ofshadows@naver.com</p>
                </div>
              </div>
              <div className="am-stroke"></div>
              <div className="am-infos-two">
                <div className="am-infos-icontext">
                  <div className="iconsize">
                    <p className="subtitle-text bi bi-mortarboard-fill"></p>
                  </div>
                  <div className="am-education">
                    <p>선문대학교 시각디자인학과 졸업(2021)</p>
                  </div>
                </div>
                <div className="am-infos-icontext">
                  <div className="iconsize">
                    <p className="none subtitle-text bi bi-mortarboard-fill"></p>
                  </div>
                  <div className="am-education">
                    <p>동성직업전문학교 프론트/JAVA 풀스택 과정 수료(2022)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="am-about">
              <div>
                <div className="am-career">
                  <div className="iconsize">
                    <span className="subtitle-text bi bi-pc"></span>
                  </div>
                  <div className="am-career__title">
                    네이버시스템(주) - 프론트엔드 개발자
                  </div>
                  <div className="am-career__date">
                    2023.06 ~ 2023.09 (3개월)
                  </div>
                </div>
                <div className="am-career-detail">
                  <div className="iconsize">
                    <span className="none subtitle-text bi bi-pc"></span>
                  </div>
                  <div>
                    · 부천시 미세먼지 포털 서비스 <br />
                    &nbsp; - 공업단지 비산먼지 측정 시스템 실시간 데이터 표출 및
                    데이터 시각화
                    <br />
                    &nbsp; - 사이니지 관리 이미지 및 데이터 표출
                    <br />
                    &nbsp; - OpenAPI Key 관리 시스템 쿼리튜닝
                    <br />
                    <br />
                    · 한국철도기술연구원 모니터링 시스템
                    <br />
                    &nbsp; - 생물학적 유해인자 현황 쿼리튜닝 및 데이터 시각화
                    <br />
                    &nbsp; - 실외공기질 측정자료 조회 데이터 표출
                    <br />
                  </div>
                </div>
                <div className="am-career">
                  <div className="iconsize">
                    <span className="subtitle-text bi bi-pc"></span>
                  </div>
                  <div className="am-career__title">
                    (주)레인디어스 - 프론트엔드 개발자
                  </div>
                  <div className="am-career__date">2023.09 ~ 재직중</div>
                </div>
                <div className="am-career-detail">
                  <div className="iconsize">
                    <span className="none subtitle-text bi bi-pc"></span>
                  </div>
                  <div>
                    · B2B 오픈마켓 서비스 Buybly <br />
                    &nbsp; - 관리자페이지 구성
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

export default AboutMe;
