import React from 'react';
import c from './ContestsBlock.module.scss'
import {Loader} from "../Loader/Loader";
import {AiOutlineInstagram} from "react-icons/ai";
import {useNavigate, Navigate, Link} from "react-router-dom";

function ContestsBlock(
  {
    data,
    selectedDate,
    setSelectedDate,
    filteredData,
  }) {
  const navigate = useNavigate()
  
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
                    <div key={url.id} className={c.item_card}>
                      <p className={c.item_date}>{item.date}</p>
                      <div className={c.card_image}>
                        <img src={url.image} alt=""/>
                      </div>
                      <p className={c.item_name}>
                        {url.name}
                        <a href={url.link}>
                          <img src={url.social_icon} alt="" />
                        </a>
                      </p>
                      <p>Выиграли {url.prize}</p>
                     
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