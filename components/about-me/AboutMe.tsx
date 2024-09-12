import { useCallback, useEffect, useRef, useState } from "react";

import { InfoItem } from "./AboutInfo";
import commonStyles from "@/styles/common.module.scss";
import { Career } from "./career/Career";
import { CareerDetails } from "./career/CareerDetails";
import styles from "./about.module.scss";

type AboutMeProps = {
  canvas: number | undefined;
};

const AboutMe = ({ canvas }: AboutMeProps) => {
  const [ElementVisible, setElementVisible] = useState<boolean>(false);
  const [amAnime, setAmAnime] = useState<number>(0);
  const myRef = useRef<HTMLDivElement | null>(null);
  const aboutMe = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // 컨텐츠 Opacity조정을 위함
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setElementVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current as HTMLDivElement);
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
    <section className={styles.amContainer}>
      <div className={`${styles.amArea} ${commonStyles.containerDefault}`}>
        <div className={styles.amWrapper} ref={myRef}>
          <div
            className={
              ElementVisible
                ? `${styles.amVisible} ${styles.amContent}`
                : `${styles.amInVisible} ${styles.amContent}`
            }
          >
            <div ref={aboutMe} className={styles.amTitleText}>
              <div style={{ transform: `translateX(${amAnime}px)` }}>
                About me
              </div>
            </div>
            <div className={styles.amAbout}>
              <div className={styles.amInfo}>
                <InfoItem iconClass="bi bi-person-fill" text="이태일" />
                <InfoItem
                  iconClass="bi bi-calendar-event-fill"
                  text="1993.02.15"
                />
              </div>
              <div className={styles.amStroke} />
              <div className={styles.amInfo}>
                <InfoItem
                  iconClass="bi bi-telephone-fill"
                  text="010-4221-8622"
                />
                <InfoItem
                  iconClass="bi bi-envelope-fill"
                  text="ofshadows@naver.com"
                />
              </div>
              <div className={styles.amStroke} />
              <div className={styles.amInfos}>
                <InfoItem
                  iconClass="bi bi-mortarboard-fill"
                  text="선문대학교 시각디자인학과 졸업(2021)"
                  type="double"
                />
                <InfoItem
                  text="동성직업전문학교 프론트/JAVA 풀스택 과정 수료(2022)"
                  type="double"
                />
              </div>
            </div>
            <div className={styles.amAbout}>
              <Career date="2023.10 ~ 재직중">
                <p>
                  (주)레인디어스
                  <br />
                  프론트엔드 개발팀
                </p>
              </Career>
              <CareerDetails>
                <ul className={styles.careerDetailUl}>
                  <li>
                    · B2B 오픈마켓 서비스 Buybly
                  </li>
                  <li>&nbsp; - 2023.10 ~</li>
                  <li>&nbsp; - React 프로젝트</li>
                  <li>&nbsp; - React-hook-form, Zod도입</li>
                  <li>
                    &nbsp; - 관리자페이지, 공급자 페이지, 마켓플레이스 UI개발 및
                    데이터 통합 (회원 관리, 상품 관리, 상품 등록, 상품리스트
                    표출, 장바구니 등)
                  </li>
                  <li>&nbsp; - 고객사 페이지 세팅 및 UI개발, 데이터 통합</li>
                  <li>&nbsp; - 공통 UI 컴포넌트 제작</li>
                  <li>&nbsp; - FSD 아키텍쳐 도입</li>
                  <br />
                  <li>&nbsp; - 2024.05 ~</li>
                  <li>&nbsp; - Next.js 14로 마이그레이션</li>
                  <li>&nbsp; - Recoil을 Zustand로 마이그레이션</li>
                  <li>
                    &nbsp; - Styled-components를 TailwindCSS로 마이그레이션
                  </li>
                  <li>&nbsp; - Storybook 도입</li>
                  <li>&nbsp; - Repository별 UI관리를 위한 Submodule 도입</li>
                  <li>&nbsp; - Next-Auth도입</li>
                  <li>
                    &nbsp; - 다국어 번역을 위해 i18n과 구글 스프레드 시트 연동
                    (업, 다운로드)
                  </li>
                  <li>&nbsp; - 회원 페이지 제작</li>
                </ul>
              </CareerDetails>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
