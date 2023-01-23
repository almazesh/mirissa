import React from 'react';
import c from './Discounts.module.scss'
import {GET_SINGLE_DISCOUNTS} from "../../api/api";
import {useParams} from "react-router-dom";
import {Loader} from "../../components/Loader/Loader";

function Discounts() {
  const [data, setData] = React.useState(null)
  const {id} = useParams()
  
  React.useEffect(() => {
    GET_SINGLE_DISCOUNTS(parseInt(id)).then(r => setData(r.data))
  }, [])
  
  console.log(data)
  
  if(!data) return <Loader/>
  return (
    <div className={c.discounts}>
      <div className={c.discounts_container}>
        <div className={c.discounts_title}>
          <h2>{data?.title}</h2>
        </div>
        <div className={c.description}>
          <p>
            {data?.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Discounts;