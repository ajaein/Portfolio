import { MenuItem } from "./ProjectMenu";
import commonStyles from '@/styles/common.module.scss'
import styles from './project.module.scss'

interface ProjectProps {
  onModal: () => void;
  onAcoModal: () => void;
  onPortfolioModal: () => void;
}

const Project = ({
  onModal,
  onAcoModal,
  onPortfolioModal,
}: ProjectProps) => {
  return (
    <section className={styles.projectContainer}>
      <div className={`${styles.projectWrapper} ${commonStyles.containerDefault}`}>
        <div className={styles.projectTitle}>
          <div className={styles.projectTitleName}>Project</div>
        </div>
        <div className={styles.menu}>
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
            src="/porfolio_img/gpttranslator.PNG"
            alt="gpt-01"
            marqueeText="Others - 000"
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
