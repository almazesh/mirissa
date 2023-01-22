import React from 'react';
import c from './SliderCard.module.scss'
import {HiOutlineShoppingBag} from "react-icons/hi";
import {useNavigate} from "react-router-dom";

function SliderCard({title, product_images, price, id, setRemove, itemObj, setSingle, setReload}) {
  const [like, setLike] = React.useState(false)
  
  React.useEffect(() => {
    const favArr = JSON.parse(localStorage.getItem('favorites'))
    if (favArr) {
      favArr.map(item => item?.id === id && setLike(true))
    }
  }, [])
  
  const navigate = useNavigate()
  return (
    <div className={c.card}>
      <div className={c.card_title}>
        <h1>
          {title}
        </h1>
      </div>
      <div
        className={c.card_image}
        onClick={() => navigate(`/products/${id}`)}
      >
        <img src={product_images[0].image} alt="" />
      </div>
      <div className={c.card_footer}>
        <p>
          {price} сом/кг
        </p>
        <button onClick={() => {
          if (like === false) {
            setSingle(itemObj)
            setLike(true)
          } else {
            setRemove(itemObj)
            setLike(false)
            setReload(2)
          }
        }}>
          <span>
            <HiOutlineShoppingBag/>
          </span>
          {
            like ? 'в избранном' : 'в избранные'
          }
        </button>
      </div>
    </div>
  );
}

export default SliderCard;