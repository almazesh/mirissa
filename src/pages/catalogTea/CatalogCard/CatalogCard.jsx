import React from 'react'

import c from "./index.module.scss"


const CatalogCard = () => {
  return (
    <div className={c.catalog_card}>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17"><path fill="none" stroke="#552f1d" stroke-miterlimit="50" stroke-width="1.5" d="M20.998 5.395c0-1.99-1.78-4.395-4.75-4.395C13.28 1 11.5 3.93 11.5 3.93S9.72 1 6.75 1C3.78 1 2 3.405 2 5.395 2 7.385 1.629 8.823 11.499 16c9.87-7.177 9.498-8.615 9.498-10.605z"></path></svg>
      <p className={c.tea}>Чай</p>
      
      <div className={c.catalog_card_img}>
        <img src='https://www.chay.info/upload/webp/resize_cache/965/200_200_1/965b6fc3d4940ad01439aab79750eaca.webp' alt=''/>
      </div>

      <div className={c.catalog_card_title}>
        <h2>Вишневый Марципан</h2>
      </div>

      <div className={c.catalog_card_footer}>
        <h2>260 сом / кг</h2>

        <p>
         Яркий и гармоничный чай, сочетающий в себе удивительные ноты. 
        </p>
      </div>
    </div>
  )
}

export default CatalogCard
