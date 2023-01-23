import React from 'react'
import StockCard from '../../components/Stocks/StockCard'
import {ScrollToTop} from '../../helpers/scroll'
import {stockCards} from '../../utils/list'

import c from "./index.module.scss"
import {GET_DISCOUNTS} from "../../api/api";
import {Loader} from "../../components/Loader/Loader";

const Actions = () => {
  const [data, setData] = React.useState(null)
  
  React.useEffect(() => {
    GET_DISCOUNTS().then(r => setData(r.data))
  }, [])
  
  React.useEffect(() => {
    ScrollToTop()
  }, [])
  
  if (!data) return <Loader/>
  return (
    <div className={c.actions_container}>
      <div className={c.actions_container_title}>
        <h2>Акции</h2>
      </div>
      
      <div className={c.actions_container_row}>
        {
          data?.map(item => (
            <div key={item.id}>
              <StockCard  {...item}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Actions
