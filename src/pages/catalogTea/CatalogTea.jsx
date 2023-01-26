import React from 'react'
import Fact from '../../components/Fact/Fact';
import {ScrollToTop} from '../../helpers/scroll';
import {FilterList} from '../../utils/list';
import CatalogCard from './CatalogCard/CatalogCard';

import c from "./index.module.scss"
import {Loader} from "../../components/Loader/Loader";
import {GET_PRODUCTS} from "../../api/api";

const Catalog = () => {
  
  const [singleFavorite, setSingleFavorite] = React.useState(null)
  const [removeSingleFavorite, setRemoveSingleFavorite] = React.useState(null)
  const [catalog, setCatalog] = React.useState(null)
  const [sortedArr, setSortedArr] = React.useState(null)
  const [filterType, setFilterType] = React.useState(null)
  const [reload, setReload] = React.useState(1)
  const [refresh, setRefresh] = React.useState('')
  
  
  React.useEffect(() => {
    ScrollToTop()
  }, [])

  React.useEffect(() => {
    GET_PRODUCTS()
      .then(res => {
        res.data &&
        setSortedArr(res.data)
        setCatalog(res.data)
      })
  }, [])
  
  
  const rateSort = () => {
    const sorted = catalog.sort((a, b) => {
      return  b.total_review - a.total_review
    })
    setSortedArr(sorted)
    setRefresh('reload')
  }
  
  const priceSort = () => {
    const sorted = catalog.sort((a, b) => {
      return  b.price - a.price
    })
    setSortedArr(sorted)
    setRefresh('reload')
  }
  
  const popularSort = () => {
    const sorted = catalog.sort((a, b) => {
      return  a.review_product.length - b.review_product.length
    })
    setSortedArr(sorted)
    setRefresh('reload')
  }
  
  
  React.useEffect(() => {
    if(filterType?.sort === 'rate'){
      rateSort()
    }else if(filterType?.sort === 'price'){
      priceSort()
    }else if(filterType?.sort === 'popular'){
      popularSort()
    }
  }, [filterType, refresh])
  
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
  

  return (
    <div className={c.container}>
      <div className={c.catalog_title}>
        <h2>Чай</h2>
      </div>
      
      <Fact/>
      
      <div className={c.catalog_area}>
        <div className={c.catalog_header}>
          <p>
            Сортировка:
          </p>
          
          <ul>
            {FilterList.map(item => (
              <li
                key={item.id}
                className={filterType?.id === item.id ? c.active_sort : ''}
                onClick={() => setFilterType(item)}
              >
                {item.caption}
              </li>
            ))}
          </ul>
        </div>
        <div className={c.catalog_row}>
          {
            !sortedArr ? <div className={c.loader}><Loader/></div> :
              sortedArr?.map(item => (
                <CatalogCard
                  {...item}
                  key={item.id}
                  setSingle={setSingleFavorite}
                  itemObj={item}
                  setRemove={setRemoveSingleFavorite}
                  setReload={setReload}
                  page={'catalog'}
                />
              ))
          }
        </div>
      </div>
    </div>
  )
}

export default Catalog;