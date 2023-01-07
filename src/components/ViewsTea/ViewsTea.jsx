

import React from 'react'

import c from "./index.module.scss"

import TypeOfTea from "../../images/magazine/c8e51091f063062953bb14df2475d487 3.png"


const ViewsTea = () => {
  return (
    <div className={c.views_row}>
      <div className={c.views_left}>
        <h2>~ Виды чаев</h2>
        <p>
          Мирисса предоставляет несколько видов черного цейлонского чая. Пикетированный, листовой а также черный чай с бергамотом. 
          В ассортименте имеется 100 и 200 грамм весового листового чая, 25 и 100 пакетиков в упаковке а также 200 грамм черного листового чая с бергамотом.
        </p>

        <h3>MIRISSA</h3>
      </div>
      <div className={c.views_right}>
        <img src={TypeOfTea} alt=''/>
      </div>
    </div>
  )
}

export default ViewsTea