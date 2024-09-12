import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.scss";

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
              src="/githubLogo.png"
              alt="github"
              width={24}
              height={24}
            />
            GitHub
          </Link>
          <Link
            className={styles.footerIcon}
            href="https://wonderfulwonder.tistory.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="/tistory.png"
              alt="blog"
              width={24}
              height={24}
            />
            Blog
          </Link>
        </div>
      </div>
    </footer>
  );
};
