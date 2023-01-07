

import React from 'react'
import ViewsTea from '../../components/ViewsTea/ViewsTea'
import MagazineImg from "../../images/magazine/16ee22f1579a8a2c-2167-1.png"

import c from "./index.module.scss"


const Magazine = () => {
  return (
    <div className={c.magazine_container}>
      <div className={c.magazine_title}>
        <h2>Каталог</h2>
      </div>

      <ViewsTea />

      <div className={c.magazine_catalog}>
        <h2>Подборки</h2>

        <div className={c.magazine_row}>
          <div className={c.card}>
            <img src={MagazineImg} alt=''/>
          </div>
          <div className={c.card}>
            <img src={MagazineImg} alt=''/>
          </div>
          <div className={c.card}>
            <img src={MagazineImg} alt=''/>
          </div>
          <div className={c.card}>
            <img src={MagazineImg} alt=''/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Magazine