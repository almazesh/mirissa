import React from 'react';
import c from "../Banner.module.scss";
import SliderCard from "../SliderCard";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import useData from "../../../hooks/useData";

function CardSlider() {
  const {catalog} = useData()
  return (
    <div className={c.slider_card}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {
          catalog?.map(item => {
            return (
              <SwiperSlide key={item.id}>
                <SliderCard  {...item}/>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
}

export default CardSlider;