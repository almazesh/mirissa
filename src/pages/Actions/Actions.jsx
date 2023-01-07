
import React from 'react'
import StockCard from '../../components/Stocks/StockCard'
import { stockCards } from '../../utils/list'

import c from "./index.module.scss"

const Actions = () => {
  return (
    <div className={c.actions_container}>
      <div className={c.actions_container_title}>
        <h2>Акции</h2>
      </div>

      <div className={c.actions_container_row}>
      {
            stockCards.map(item => (
              <StockCard  {...item}/>
            ))
          }
      </div>
    </div>
  )
}

export default Actions
