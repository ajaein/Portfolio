import React, { PropsWithChildren } from "react";
import styles from "../about.module.scss";

export const CareerDetails = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.amCareerDetail}>
      <div className={styles.iconsize}>
        <span
          className={`${styles.none} ${styles.subtitleText} bi bi-pc`}
        ></span>
      </div>
      <div>{children}</div>
    </div>
  );
};
