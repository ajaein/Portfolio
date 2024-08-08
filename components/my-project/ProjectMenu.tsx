import Image from "next/image";
import styles from './project.module.scss'

interface MenuItemProps {
  onClick: () => void;
  title: string;
  src: string;
  alt: string;
  marqueeText: string;
  marqueeNumber?: number;
}

export const MenuItem = ({
  onClick,
  title,
  src,
  alt,
  marqueeText,
  marqueeNumber = 4,
}: MenuItemProps) => {
  const repeatedText = Array(marqueeNumber).fill(marqueeText).join(" - ");

  return (
    <div className={styles.menuItem}>
      <button className={styles.projectMenuItemLink} onClick={onClick}>
        {title}
      </button>
      <div className={styles.menuItemImg}>
        <Image
          className={styles.menuItemImgBorder}
          src={src}
          alt={alt}
          width="800"
          height="500"
        />
      </div>
      <div className={styles.marquee}>
        <div className={styles.marqueeInner}>
          <span>{repeatedText}</span>
        </div>
      </div>
    </div>
  );
};
