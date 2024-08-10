import Image from "next/image";
import Link from "next/link";
import styles from './footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.copyright}>Lee-TaeIl Portfolio 2022 ~</div>
        <div className={styles.footerBi}>
          <Link
            className={styles.footerIcon}
            href="https://github.com/k1k2brz"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="https://img.shields.io/badge/Github-000000?style=flat&logo=github&logoColor=white"
              alt="github"
              width={65}
              height={10}
            />
          </Link>
          <Link
            className={styles.footerIcon}
            href="https://wonderfulwonder.tistory.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="https://img.shields.io/badge/Blog-000000?style=flat&logo=tistory&logoColor=white"
              alt="github"
              width={56}
              height={10}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};