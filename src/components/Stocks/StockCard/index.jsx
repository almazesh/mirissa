import React from 'react';
import c from './StockCard.module.scss'
import {useNavigate} from "react-router-dom";


function StockCard({title, text}) {
  const navigate = useNavigate()
  return (
    <>
      <div className={c.stock_card}>
        <img className={c.back_img} src="/assets/slider-card-img.webp" alt="" />
        <div className={c.title}>
          <h2>
            {title}
          </h2>
        </div>
        <div className={c.text}>
          <p>
            {text}
          </p>
        </div>
        <div className={c.btn}>
          <button onClick={() => navigate('/discounts')}>
            подробнее
          </button>
        </div>
      </div>
    </>
  );
}

export default StockCard;