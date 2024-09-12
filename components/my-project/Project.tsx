import { MenuItem } from "./ProjectMenu";
import commonStyles from "@/styles/common.module.scss";
import styles from "./project.module.scss";

interface ProjectProps {
  onModal: () => void;
  onAcoModal: () => void;
  onPortfolioModal: () => void;
  onSereneSpacesModal: () => void;
}

const Project = ({ onModal, onAcoModal, onPortfolioModal, onSereneSpacesModal }: ProjectProps) => {
  return (
    <section className={styles.projectContainer}>
      <div
        className={`${styles.projectWrapper} ${commonStyles.containerDefault}`}
      >
        <div className={styles.projectTitle}>
          <div className={styles.projectTitleName}>Project</div>
        </div>
        <div className={styles.menu}>
          <MenuItem
            onClick={onSereneSpacesModal}
            title="Serene Spaces"
            src="/porfolio_img/serene01.PNG"
            alt="serene-01"
            marqueeText="Serene Spaces - 003"
          />
          <MenuItem
            onClick={onAcoModal}
            title="A.C.O"
            src="/porfolio_img/aco05.PNG"
            alt="aco-05"
            marqueeText="ACO - 003"
          />
          <MenuItem
            onClick={onPortfolioModal}
            title="Portfolio Page"
            src="/porfolio_img/portfolio.PNG"
            alt="portfolio-01"
            marqueeText="Portfolio - 002"
          />
          {/* Spring 하던거로 변경할것 */}
          <MenuItem
            onClick={onModal}
            title="Others"
            src="/porfolio_img/springcrud.png"
            alt="others-01"
            marqueeText="Others - 001"
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
