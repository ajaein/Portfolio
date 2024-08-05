interface InfoItemProps {
  iconClass?: string;
  text: string;
  type?: "single" | "double";
}

export const InfoItem = ({ iconClass, text, type = "single" }: InfoItemProps) => (
  <div className="am-infos-icontext">
    <div className="iconsize">
      <p className={`subtitle-text ${iconClass}`}></p>
    </div>
    {type === "single" ? (
      <p>{text}</p>
    ) : (
      <div className="am-education">
        <p>{text}</p>
      </div>
    )}
  </div>
);