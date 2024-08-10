import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from '../project-modals.module.scss'

interface ImageSlideProps {
  className?: string;
  slide: {
    src: string;
    alt: string;
  }[];
  width?: string;
  height?: string;
}

export const ImageSlide = ({
  className,
  slide,
  width,
  height,
}: ImageSlideProps) => {
  return (
    <div className={styles.swiperImgWrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {slide?.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                className={styles.swiperImg}
                src={slide.src}
                alt={slide.alt}
                width="800"
                height="500"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
