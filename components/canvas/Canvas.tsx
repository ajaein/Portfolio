import Image from "next/image";
import styles from "./canvas.module.scss";
import commonStyles from '@/styles/common.module.scss'

const Canvas = () => {
  return (
    <section className={styles.cavContainer}>
      <div className={`${styles.cavWrapper} ${commonStyles.containerDefault}`}>
        <div className={styles.cavContent}>
          <p className={styles.cavText}>안녕하세요</p>
          <p className={`${styles.cavBold} ${styles.cavText}`}>Front-end Developer 이태일입니다.</p>
          <p className={styles.cavText}>항상 탐구하는 개발자가 되고 싶습니다.</p>
        </div>
        <div className={styles.cavImgContainer}>
          <Image
            src="/profile/profile.jpg"
            alt="profile"
            width={265}
            height={265}
            className={styles.cavPhoto}
          />
        </div>
      </div>
    </section>
  );
};

export default Canvas;
