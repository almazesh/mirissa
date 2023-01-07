
import React from 'react'
import { facts_list } from '../../utils/list'

import c from "./index.module.scss"

const Fact = () => {
  return (
    <div className={c.facts_text}>
      {
        facts_list.map(item => (
          <div className={c.fact_block} key={item.id}>
            <div className={c.fact_cardImg}>
              <img src={item.img} alt="facts"/>
            </div>
            <p>
              "{item.title}"
            </p>
          </div>
        ))
      }
    </div>
  )
}

export default Fact
