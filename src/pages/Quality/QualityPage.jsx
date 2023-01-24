
import React from 'react'

import c from "./index.module.scss"

import QualityIcon from "../../images/magazine/2-1 1.png"
import {ScrollToTop} from "../../helpers/scroll";


const QualityPage = () => {
  React.useEffect(() => {
    ScrollToTop()
  }, [])
  return (
    <div className={c.quality_page}>
      <div className={c.quality_container}>
        <div className={c.quality_page_title}>
          <h2>Знак высокого качества</h2>
        </div>

        <div className={c.quality_page_row}>
          <div className={c.left}>
            <h4>Лев с мечом - знак качества родом из Цейлона</h4>
            <p>
              Цейлонский лев с мечом - является знаком высококачественного чая, произведенного и упакованного на Шри-ланке (Цейлон).
              Лев с мечом зарегистрирован в большинстве стран мира. Данный логотип помещается отнюдь не на все пачки чая, упакованный или произведенные на Цейлоне. 
            </p>
          </div>
          <div className={c.right}>
            <img src={QualityIcon} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QualityPage