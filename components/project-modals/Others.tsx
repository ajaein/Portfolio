import type { ModalProps } from "../../types";
import Wrapper from "./ui/Wrapper";
import Outline from "./ui/Outline";
import { ImageSlide } from "./ui/ImageSlide";
import { othersSlide } from "@/lib/configs";
import Urls from "./ui/Urls";

import styles from "./project-modals.module.scss";
import Tools from "./ui/Tools";

const github = [
  {
    title: "https://github.com/k1k2brz/Board",
    link: "https://github.com/k1k2brz/Board",
  },
];

const crudTools = ["Javascript", "JQuery", "Java", "Spring", "PostgreSQL"];

const Translator = ({ onModal }: ModalProps) => {
  return (
    <Wrapper title="Others / README.md" onModal={onModal}>
      <Outline slide={<ImageSlide slide={othersSlide} />}>
        <p className={styles.contentInfoName}>Spring Board (CRUD)</p>
        <p className={styles.contentInfoDays}>2023.06 · 개인 프로젝트</p>
        <Tools tools={crudTools} />
        <ul className={`${styles.contentInfoDays} ${styles.small}`}>
          <span>주요 기능:</span>
          <li>- 기본적인 게시판 CRUD</li>
          <li>- 작성자, 제목, 내용, 작성기간에 대한 검색기능</li>
          <li>- 게시글 개수에 따른 페이지네이션</li>
          <li>- 조회수 카운팅</li>
          <li>- 비밀번호 체크</li>
        </ul>
        <div className={styles.contentEx}>
          <p className={styles.contentExText}>
            <span>
              Spring의 기본 기능을 학습하기 위해 JSP를 사용한 CRUD를
              만들었습니다.
            </span>
            <br />
            <br />
            <span>백엔드의 작동 방식을 이해할 수 있게 되었습니다.</span>
            <br />
            여태까지 백엔드와 프론트엔드를 전부 맡아서 프로젝트를 해본 경험이
            없었는데, 이 프로젝트 덕분에 Spring의 구조를 이해하고 소스 코드를
            읽을 수 있게 되었습니다. 뿐만 아니라 평소 ORM을 사용하면서 이해하기 어려웠던 부분들을
            어떻게 접근해야 하는지 알게 되었다는 성취를 얻었습니다.
            <br />
            이번 작업에서는 퍼블리싱 없이 백엔드부터 만들어 나가는 과정을 익힐
            수 있었습니다. 덕분에 협업 시 전보다 수월한 커뮤니케이션을 할 수
            있겠다는 생각이 들었습니다
            <br />
          </p>
        </div>
        <div className={styles.portfolioBottom}>
          <Urls linkArray={github} title="Github: " />
          <div style={{ marginTop: 15 }}>
            <div>
              <b>Run Eclipse Tomcat Server</b>
            </div>
            <p>- Tomcat v9.0 Server 선택 후 Start the server</p>
          </div>
        </div>
      </Outline>
    </Wrapper>
  );
};

export default Translator;
