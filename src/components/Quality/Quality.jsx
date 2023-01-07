
import React from 'react'
import { Link } from 'react-router-dom';

import c from "./index.module.scss"

import QualityIcon from "../../images/magazine/2-1 1.png"

const Quality = () => {
  return (
    <div className={c.quality_row}>
      <div className={c.card}>
        <img src='https://www.ggau.by/images/2011/stanislawowo/stanislawowo-2.jpg' alt=''/>

        <h2>Знак высокого качества</h2>

        <p>Лев с мечом - знак качества родом из Цейлона</p>

        <Link to={"/quality"}>Подробнее</Link>
      </div>
      
      <div className={c.icon}>
        <img src={QualityIcon} alt=''/>
      </div>
    </div>
  )
}

export default Quality;
