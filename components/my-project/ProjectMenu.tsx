import Image from "next/image";

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
    <div className="menu__item">
      <button className="project__menu__item-link" onClick={onClick}>
        {title}
      </button>
      <div className="menu__item-img">
        <Image
          className="menu__item-img-border"
          src={src}
          alt={alt}
          width="800"
          height="500"
        />
      </div>
      <div className="marquee">
        <div className="marquee__inner">
          <span>{repeatedText}</span>
        </div>
      </div>
    </div>
  );
};
