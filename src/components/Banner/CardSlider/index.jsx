import React from 'react';
import c from "../Banner.module.scss";
import SliderCard from "../SliderCard";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import useData from "../../../hooks/useData";
import {Loader} from "../../Loader/Loader";

function CardSlider() {
  const [singleFavorite, setSingleFavorite] = React.useState(null)
  const [removeSingleFavorite, setRemoveSingleFavorite] = React.useState(null)
  const [reload, setReload] = React.useState(1)
  
  React.useEffect(() => {
    const favorite = JSON.parse(localStorage.getItem('favorites'))
    
    const check = favorite.find(item => item?.id === singleFavorite?.id)
    check === undefined && favorite.push(singleFavorite)
    localStorage.setItem('favorites', JSON.stringify(favorite))
  }, [singleFavorite])
  
  React.useEffect(() => {
    const favorite = JSON.parse(localStorage.getItem('favorites'))
    const filter = favorite.filter(item => item?.id !== removeSingleFavorite?.id)
    const checkOfNull = filter.filter(item => item !== null)
    localStorage.setItem('favorites', JSON.stringify(checkOfNull))
    
  }, [removeSingleFavorite])
  
  const {catalog} = useData()
  if (!catalog) return <Loader/>
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
                <SliderCard
                  {...item}
                  setSingle={setSingleFavorite}
                  itemObj={item}
                  setRemove={setRemoveSingleFavorite}
                  setReload={setReload}
                />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
}

export default CardSlider;