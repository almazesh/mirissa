import React from 'react'

import c from "./index.module.scss"
import {useNavigate} from "react-router-dom";
import {RxCross2} from "react-icons/rx";
import {GET_SINGLE_PRODUCT} from "../../../api/api";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";


const CatalogCard = (
  {
    title,
    price,
    setSingle,
    itemObj,
    id,
    setRemove,
    setReload,
    product_images,
    page,
  }) => {
  
  const [like, setLike] = React.useState(false)
  const [product, setProduct] = React.useState(null)
  const navigate = useNavigate()
  
  React.useEffect(() => {
    const favArr = JSON.parse(localStorage.getItem('favorites'))
    if (favArr) {
      favArr.map(item => item?.id === id && setLike(true))
    }
  }, [])
  
  React.useEffect(() => {
    GET_SINGLE_PRODUCT(id).then(res => setProduct(res.data))
  }, [])
  
  let icon;
  
  if (page === 'favorites') {
    icon = <RxCross2/>
  } else if (page === 'catalog') {
    icon = <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17">
      <path fill="#552f1d" stroke="#552f1d" strokeMiterlimit="50" strokeWidth="1.5"
            d="M20.998 5.395c0-1.99-1.78-4.395-4.75-4.395C13.28 1 11.5 3.93 11.5 3.93S9.72 1 6.75 1C3.78 1 2 3.405 2 5.395 2 7.385 1.629 8.823 11.499 16c9.87-7.177 9.498-8.615 9.498-10.605z">
      </path>
    </svg>
  }
  
  return (
    <div className={c.catalog_card}>
      <span onClick={() => {
        if (like === false) {
          setSingle(itemObj)
          setLike(true)
        } else {
          setRemove(itemObj)
          setLike(false)
          setReload(2)
        }
      }}>
        {
          like ? icon
            : <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17">
              <path fill="#fff" stroke="#552f1d" strokeMiterlimit="50" strokeWidth="1.5"
                    d="M20.998 5.395c0-1.99-1.78-4.395-4.75-4.395C13.28 1 11.5 3.93 11.5 3.93S9.72 1 6.75 1C3.78 1 2 3.405 2 5.395 2 7.385 1.629 8.823 11.499 16c9.87-7.177 9.498-8.615 9.498-10.605z">
              </path>
            </svg>
        }
      </span>
      <p className={c.tea}>??????</p>
      
      <div
        className={c.catalog_card_img}
        onClick={() => navigate(`/products/${id}`)}
      >
        <img src={product_images[0]?.image}
             alt=''/>
      </div>
      
      <div className={c.catalog_card_title} onClick={() => navigate(`/products/${id}`)}>
        <h2>{title}</h2>
      </div>
      
      <div className={c.catalog_card_footer}>
        <h2>{price} ?????? / ????</h2>
        <p>
          ?????????? ?? ?????????????????????? ??????, ???????????????????? ?? ???????? ???????????????????????? ????????.
        </p>
      </div>
      <div className={c.total_rate}>
        <div className={c.more_stars}>
          {
            Array(5).fill(0).map((_, i) => (
              <p key={i}>
                {
                  Math.floor(product?.total_review) > i ? <AiFillStar/> : <AiOutlineStar/>
                }
              </p>
            ))
          }
        </div>
        <div className={c.stars_count}>
          {
            Math.trunc(product?.total_review * 100) / 100
          }
        </div>
      </div>
    </div>
  )
}

export default CatalogCard
