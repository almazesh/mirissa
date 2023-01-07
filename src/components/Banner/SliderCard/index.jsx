import React from 'react';
import c from './SliderCard.module.scss'
import {HiOutlineShoppingBag} from "react-icons/hi";

function SliderCard({title, img, price, subtitle}) {
  return (
    <div className={c.card}>
      <div className={c.card_title}>
        <h1>
          {title}
        </h1>
        <span>
          {subtitle}
        </span>
      </div>
      <div className={c.card_image}>
        <img src={img} alt="" />
      </div>
      <div className={c.card_footer}>
        <p>
          {price} сом/кг
        </p>
        <button>
          <span>
            <HiOutlineShoppingBag/>
          </span>
          в корзину
        </button>
      </div>
    </div>
  );
}

export default SliderCard;