import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const navName = {
  about: "About Me",
  skill: "Skills",
  project: "Project",
};

const Navbar = () => {
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
    <div className={fix ? "nav__container__fixed" : "nav__container"}>
      <div className="nav__wrapper">
        <div className="nav__left">
          <div className="nav__name" onClick={() => scrollTo(0, 0)}>
            Portfolio
          </div>
        </div>
        <div className="nav__right">
          <div className="nav__list">
            <ul className="nav__list-content">
              <li className="nav__menu" onClick={() => scrollTo(0, 0)}>
                Home
              </li>
              {Object.entries(navName).map(([key, value]) => {
                return (
                  <li key={key}>
                    <Link
                      className="nav__menu"
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
    </div>
  );
};

export default Navbar;
