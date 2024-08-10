import React, { ReactNode } from "react";
import { type ModalProps } from "@/types";
import styles from "@/components/project-modals/project-modals.module.scss";
import commonStyles from "@/styles/common.module.scss";

interface WrapperProps extends ModalProps {
  children: ReactNode;
  title: string;
}

export default function Wrapper({ children, title, onModal }: WrapperProps) {
  return (
    <div className={`${styles.portfolio} ${commonStyles.modal}`}>
      <div className={styles.fixed}>
        <div className={styles.portfolioHeader}>
          <span>{title}</span>
          <button onClick={onModal}>
            <i className={`${styles.bi} bi-x ${styles.portfolioIcon}`} />
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}
