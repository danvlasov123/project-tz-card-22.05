import { FC } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import "./Swiper.scss";

type CardSwiperProps = {
  images: string[];
};

const CardSwiper: FC<CardSwiperProps> = ({ images = [] }) => {
  return (
    <Swiper pagination={true} modules={[Pagination]} className={"card-swiper"}>
      {images.map((img, key) => {
        return (
          <SwiperSlide key={key}>
            <img
              loading="lazy"
              src={img}
              alt={`${key}`}
              className="card-swiper-img"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export { CardSwiper };
