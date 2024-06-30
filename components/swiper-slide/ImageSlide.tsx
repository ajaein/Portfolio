import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    <div className="portfolio__img">
      <Swiper
        className="portfolio__img-swiper"
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
                className="portfolio__img-01"
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
