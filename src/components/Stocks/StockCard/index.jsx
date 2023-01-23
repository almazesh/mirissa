import React from 'react';
import c from './StockCard.module.scss'
import {useNavigate} from "react-router-dom";


function StockCard({description, id, title}) {
  const navigate = useNavigate()
  
  return (
    <>
      <div className={c.stock_card}>
        <img className={c.back_img} src="/assets/slider-card-img.webp" alt="" />
        <div className={c.title}>
          <h3>
            {title}
          </h3>
        </div>
        <div className={c.text}>
          <p>
            {description}
          </p>
        </div>
        <div className={c.btn}>
          <button onClick={() => navigate(`/discounts/${id}`)}>
            подробнее
          </button>
        </div>
      </div>
    </>
  );
}

export default StockCard;