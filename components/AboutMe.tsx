import { useCallback, useEffect, useRef, useState } from "react";
import { Career, CareerDetails } from "./career";

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
                <Career
                  title="네이버시스템(주) - 프론트엔드 개발자"
                  date="2023.06 ~ 2023.09"
                />
                <CareerDetails>
                  <span>
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
                  </span>
                </CareerDetails>
                <Career
                  title="(주)레인디어스 - 프론트엔드 개발자"
                  date="2023.10 ~ 재직중"
                />
                <CareerDetails>
                  <span>
                    · B2B 오픈마켓 서비스 Buybly <br />
                    &nbsp; - React 프로젝트
                    <br />
                    &nbsp; - React-hook-form, Zod도입
                    <br />
                    &nbsp; - 관리자페이지, 공급자 페이지, 마켓플레이스 UI개발 및
                    데이터 통합 (회원 관리, 상품 관리, 상품 등록, 상품리스트
                    표출, 장바구니 등)
                    <br />
                    &nbsp; - 고객사 페이지 세팅 및 UI개발, 데이터 통합
                    <br />
                    &nbsp; - 공통 컴포넌트 제작
                    <br />
                    &nbsp; - FSD 아키텍쳐 도입
                    <br />
                    2024.05 ~
                    <br />
                    &nbsp; - Next.js로 마이그레이션
                    <br />
                    &nbsp; - Recoil을 Zustand로 마이그레이션
                    <br />
                    &nbsp; - Styled-components를 TailwindCSS로 마이그레이션
                    <br />
                    &nbsp; - Storybook 도입
                    <br />
                    &nbsp; - Repository별 UI관리를 위한 Submodule 도입
                    <br />
                    &nbsp; - Next-Auth도입
                    <br />
                    &nbsp; - 다국어 번역을 위해 i18n과 구글 스프레드 시트 연동
                    (업, 다운로드)
                    <br />
                  </span>
                </CareerDetails>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
