import React from "react";
import Link from "next/link";
import { type LinkType } from "@/types";
import styles from "../project-modals.module.scss";

interface ProblemSolvedProps {
  linkArray: LinkType[];
  title: string;
  direction?: "row" | "column";
}

export default function Urls({
  linkArray,
  title,
  direction = "row",
}: ProblemSolvedProps) {
  return (
    <div
      className={
        direction === "row"
          ? styles.portfolioBottomLinks
          : `${styles.portfolioBottomLinks} ${styles.links}`
      }
    >
      <div className={styles.portfolioBottomSolve}>
        <b>{title}</b>
      </div>
      {linkArray.map((link, index) => (
        <Link
          key={index}
          href={link.link}
          target="_blank"
          rel="noreferrer noopener"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}
