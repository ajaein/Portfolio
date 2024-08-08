import React from "react";
import styles from "../project-modals.module.scss";

interface ToolsProps {
  tools: string[];
}

export default function Tools({ tools }: ToolsProps) {
  return (
    <div className={styles.portfolioContentInfoTools}>
      {tools.map((tool, index) => (
        <React.Fragment key={index}>
          <span className={styles.toolItem}>{tool}</span>
          {index < tools.length - 1 && (
            <span className={styles.toolItem}>|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
