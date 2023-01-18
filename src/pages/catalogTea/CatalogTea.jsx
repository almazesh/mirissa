import React from 'react'
import Fact from '../../components/Fact/Fact';
import { ScrollToTop } from '../../helpers/scroll';
import { FilterList } from '../../utils/list';
import CatalogCard from './CatalogCard/CatalogCard';

import c from "./index.module.scss"

const Catalog = () => {

  React.useEffect(() => {
    ScrollToTop()
  }, [])

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
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
        </div>
      </div>
    </div>  
  )
}

export default Catalog;