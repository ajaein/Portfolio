import React from "react";

interface CareerProps {
    title: string;
    date: string;
}

export const Career = ({ title, date }: CareerProps) => {
  return (
    <div className="am-career">
      <div className="iconsize">
        <span className="subtitle-text bi bi-pc"></span>
      </div>
      <div className="am-career__title">
        {title}
      </div>
      <div className="am-career__date">{date}</div>
    </div>
  );
};
