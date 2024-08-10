import React, { PropsWithChildren } from "react";
import styles from "../about.module.scss";

export const CareerDetails = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.amCareerDetail}>
      <div className={styles.amDetailCenter}>{children}</div>
    </div>
  );
};
