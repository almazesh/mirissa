import React from 'react';
import c from './Contests.module.scss'
import {GET_CONTEST} from "../../api/api";
import {IoIosArrowDown} from "react-icons/io";

function Contests() {
  const [data, setData] = React.useState(null)
  const [filteredData, setFilteredData] = React.useState(null)
  const [selectedDate, setSelectedDate] = React.useState(1)
  
  React.useEffect(() => {
    const filtered = data?.filter(item => item.id === selectedDate)
    filtered && setFilteredData(filtered)
  }, [selectedDate])
  
  React.useEffect(() => {
    GET_CONTEST().then(r => setData(r.data))
    
    const filtered = data?.filter(item => item.id === selectedDate)
    filtered && setFilteredData(filtered)
  }, [])
  
  return (
    <div className={c.contests}>
      <div className={c.contests_title}>
        <h1>
          Акции
        </h1>
      </div>
      
      <div className={c.contests_inner}>
        <div className={c.date}>
          {
            data?.reverse().map(item => (
              <div
                key={item.id}
                className={item.id === selectedDate ? `${c.all_date} ${c.all_date_active}` : c.all_date}
                onClick={() => {
                  setSelectedDate(item.id)
                }}
              >
                {item.date}
              </div>
            ))
          }
          {
            Array(15).fill(0).map((_, i) => (
              <div
                className={c.all_date}
              >
                2022-12-20
              </div>
            ))
          }
        </div>
        
        <div className={c.contests_card}>
          {
            filteredData?.map(item => (
              <div className={c.contests_item} key={item.id}>
                <div className={c.item_img}>
                  {
                    item?.contest?.map(url => (
                      <div>
                        <img src={url.image} alt=""/>
                        <p>Выиграли {url.price} сомов</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Contests;