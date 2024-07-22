import React, { PropsWithChildren } from "react";

export const CareerDetails = ({ children }: PropsWithChildren) => {
  return (
    <div className="am-career-detail">
      <div className="iconsize">
        <span className="none subtitle-text bi bi-pc"></span>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};
