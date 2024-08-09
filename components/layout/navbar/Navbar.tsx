import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import styles from "./navbar.module.scss";

const navName = {
  about: "About Me",
  skill: "Skills",
  project: "Project",
};

export const Navbar = () => {
  const [fix, setFix] = useState<boolean>(false);

  // Nav 애니메이션
  const setFixed = () => {
    if (window.scrollY >= 85) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setFixed);
    return () => {
      window.removeEventListener("scroll", setFixed);
    };
  }, []);

  const scrollTo = (x: number, y: number) => {
    window.scrollTo(x, y);
  };

  return (
    <nav className={styles.navSticky}>
      <div className={fix ? styles.navContainerFixed : styles.navContainer}>
        <div className={styles.navWrapper}>
          <div className={styles.navName} onClick={() => scrollTo(0, 0)}>
            Portfolio
          </div>
          <div className={styles.navList}>
            <ul className={styles.navListContent}>
              <li className={styles.navMenu} onClick={() => scrollTo(0, 0)}>
                Home
              </li>
              {Object.entries(navName).map(([key, value]) => {
                return (
                  <li key={key}>
                    <Link
                      className={styles.navMenu}
                      to={key}
                      spy={true}
                      smooth={true}
                      duration={0}
                    >
                      <span>{value}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
