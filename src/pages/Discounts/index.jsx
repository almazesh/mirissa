import React from 'react';
import c from './Discounts.module.scss'
import {GET_SINGLE_DISCOUNTS} from "../../api/api";

function Discounts() {
  const [data, setData] = React.useState(null)
  React.useEffect(() => {
    GET_SINGLE_DISCOUNTS(1).then(r => setData(r.data))
  }, [])
  
  return (
    <div className={c.discounts}>
      <div className={c.discounts_title}>
        <h1>Скидки и Акции</h1>
      </div>
    </div>
  );
}

export default Discounts;