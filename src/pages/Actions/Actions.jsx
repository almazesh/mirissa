
import React from 'react'
import StockCard from '../../components/Stocks/StockCard'
import { ScrollToTop } from '../../helpers/scroll'
import { stockCards } from '../../utils/list'

import c from "./index.module.scss"

const Actions = () => {

  React.useEffect(() => {
    ScrollToTop()
  }, [])

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
