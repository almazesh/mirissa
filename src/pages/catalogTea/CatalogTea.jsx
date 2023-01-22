import React from 'react'
import Fact from '../../components/Fact/Fact';
import { ScrollToTop } from '../../helpers/scroll';
import { FilterList } from '../../utils/list';
import CatalogCard from './CatalogCard/CatalogCard';

import c from "./index.module.scss"
import useData from "../../hooks/useData";

const Catalog = () => {

  const [singleFavorite, setSingleFavorite] = React.useState(null)
  const [removeSingleFavorite, setRemoveSingleFavorite] = React.useState(null)
  const [reload, setReload] = React.useState(1)
  const {catalog} = useData()


  React.useEffect(() => {
    ScrollToTop()
  }, [])
  
  
  React.useEffect(() => {
    const favorite = JSON.parse(localStorage.getItem('favorites'))
    
    const check = favorite.find(item => item?.id === singleFavorite?.id)
    check === undefined && favorite.push(singleFavorite)
    localStorage.setItem('favorites', JSON.stringify(favorite))
  }, [singleFavorite])

  
  React.useEffect(() => {
    const favorite = JSON.parse(localStorage.getItem('favorites'))
    const filter = favorite.filter(item => item?.id !== removeSingleFavorite?.id)
    const checkOfNull = filter.filter(item => item !== null)
    localStorage.setItem('favorites', JSON.stringify(checkOfNull))
    
  }, [removeSingleFavorite])
  
  console.log(catalog)
  
  return (
    <div className={c.container}>
      <div className={c.catalog_title}>
        <h2>Чай</h2>
      </div>

      <Fact />

      <div className={c.catalog_area}>
        <div className={c.catalog_header}>
          <p>
            Сортировка:
          </p>

          <ul>
            {FilterList.map(item => <li key={item.id}>{item.caption}</li>)}
          </ul>
        </div>
        <div className={c.catalog_row}>
          {
            catalog?.map(item => (
              <CatalogCard
                {...item}
                key={item.id}
                setSingle={setSingleFavorite}
                itemObj={item}
                setRemove={setRemoveSingleFavorite}
                setReload={setReload}
              />
            ))
          }
        </div>
      </div>
    </div>  
  )
}

export default Catalog;