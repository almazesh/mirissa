import React from 'react'

import c from "./Favorites.module.scss"
import CatalogCard from "../catalogTea/CatalogCard/CatalogCard";

function Favorites() {
  const [products, setProducts] = React.useState(null)
  const [removeSingleFavorite, setRemoveSingleFavorite] = React.useState(null)
  const [reload, setReload] = React.useState(1)
  
  React.useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    const checkOfNull = favorites.filter(item => item !== null)
    setProducts(checkOfNull)
    removeSingleFavorite && setReload(3)
  }, [reload])

  
  React.useEffect(() => {
    const favorite = JSON.parse(localStorage.getItem('favorites'))
    const filter = favorite.filter(item => item?.id !== removeSingleFavorite?.id)
    const checkOfNull = filter.filter(item => item !== null)
    localStorage.setItem('favorites', JSON.stringify(checkOfNull))
    
  }, [removeSingleFavorite])
  
  
  return (
    <div className={c.favorites_container}>
      <div className={c.favorites_container_title}>
        <h2>Избранное</h2>
      </div>
      
      <div className={c.favorites_inner}>
        <div className={c.favorites_block}>
          <div className={c.block_text}>
            ИЗБРАННОЕ
          </div>
          <div className={c.block_img}>
            <img src='/assets/favorite-block.png' alt="" />
          </div>
        </div>
        <div className={c.favorites_products}>
          {
            products?.length > 0
              ? products?.map(item => (
                <CatalogCard
                  {...item}
                  key={item?.id}
                  itemObj={item}
                  setRemove={setRemoveSingleFavorite}
                  setReload={setReload}
                  page={'favorites'}
                />
              ))
              : <h4 className={c.favorites_message}>У вас нет избранных товаров</h4>
          }
        </div>
      </div>
    </div>
  )
}

export default Favorites
