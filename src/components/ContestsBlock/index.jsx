import React from 'react';
import c from './ContestsBlock.module.scss'
import {Loader} from "../Loader/Loader";

function ContestsBlock({data, selectedDate,setSelectedDate, filteredData }) {
  return (
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
      </div>
    
      <div className={c.contests_card}>
        {
          !filteredData ? <Loader/> :
          filteredData?.map(item => (
            <div className={c.contests_item} key={item.id}>
              <div className={c.item_img}>
                {
                  item?.contest?.map(url => (
                    <div key={url.id}>
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
  );
}

export default ContestsBlock;