import React, { ReactNode } from "react";
import styles from "../about.module.scss";

interface CareerProps {
  children: ReactNode;
  date: string;
}

export const Career = ({ children, date }: CareerProps) => {
  return (
    <div className={styles.amCarrer}>
      <div className={styles.iconsize}>
        <div className={`${styles.subtitleText} bi bi-pc`} />
      </div>
      <div className={styles.amCarrerText}>
        {children}
        <div className={styles.amCarrerDate}>{date}</div>
      </div>
    </div>
  );
};
