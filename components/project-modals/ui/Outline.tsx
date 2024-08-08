import React, { ReactNode } from "react";
import styles from "../project-modals.module.scss";

interface OutlineProps {
  children: ReactNode;
  slide: ReactNode;
}

export default function Outline({ children, slide }: OutlineProps) {
  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.portfolioWrapper}>
        {slide}
        <div className={styles.portfolioContentInfo}>{children}</div>
      </div>
    </div>
  );
}
