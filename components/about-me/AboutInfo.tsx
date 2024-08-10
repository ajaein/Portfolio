import styles from './about.module.scss'

interface InfoItemProps {
  iconClass?: string;
  text: string;
  type?: "single" | "double";
}

export const InfoItem = ({ iconClass, text, type = "single" }: InfoItemProps) => (
  <div className={styles.amInfoIcontext}>
    <div className={styles.iconsize}>
      <div className={`${styles.subtitleText} ${iconClass}`} />
    </div>
    {type === "single" ? (
      <p>{text}</p>
    ) : (
      <div className={styles.amEducation}>
        <p>{text}</p>
      </div>
    )}
  </div>
);