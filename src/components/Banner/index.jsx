import React from 'react';
import c from './Banner.module.scss'
import {sliderImg} from "../../utils/list";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, EffectFade, Lazy} from "swiper";
import CardSlider from "./CardSlider";
import Fact from '../Fact/Fact';
import Quality from '../Quality/Quality';
import {useNavigate} from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


function Banner() {
  React.lazy(() => import(sliderImg))
  const navigate = useNavigate()
  return (
    <div className={c.banner}>
      <div className={c.banner_slider}>
        <div className={c.slider_1}>
          <Swiper
            slidesPerView={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay, EffectFade, Lazy]}
            lazy={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            effect={"fade"}
          >
            {
              sliderImg.map((item, id) => {
                return (
                  <SwiperSlide key={id}>
                    <div style={{background: `url("${item.url}") center / cover`}} className={c.slider_content}>
                      <h1>{item.title}</h1>
                      <span>{item.text}</span>
                      <button onClick={() => navigate(item.route)}>Подробнее</button>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
        <CardSlider/>
      </div>
      
      <Quality />
      <Fact />
    </div>
  );
}

export default Banner;