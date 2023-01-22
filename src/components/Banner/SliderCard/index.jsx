import React from 'react';
import c from './SliderCard.module.scss'
import {HiOutlineShoppingBag} from "react-icons/hi";
import {useNavigate} from "react-router-dom";

function SliderCard({title, product_images, price, id}) {
  const navigate = useNavigate()
  return (
    <div className={c.card}>
      <div className={c.card_title}>
        <h1>
          {title}
        </h1>
      </div>
      <div
        className={c.card_image}
        onClick={() => navigate(`/products/${id}`)}
      >
        <img src={product_images[0].image} alt="" />
      </div>
      <div className={c.card_footer}>
        <p>
          {price} сом/кг
        </p>
        <button>
          <span>
            <HiOutlineShoppingBag/>
          </span>
          в избранные
        </button>
      </div>
    </div>
  );
}

export default SliderCard;