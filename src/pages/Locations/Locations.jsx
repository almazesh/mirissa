import React from 'react'
import { ScrollToTop } from '../../helpers/scroll';
import { locationList } from '../../utils/list';

import c from "./index.module.scss"
import Search from './Search';

const Locations = () => {
  const [markets] = React.useState(locationList)
  const [marketList , setMarketList] = React.useState(markets)

  React.useEffect(() => {
    ScrollToTop()
  }, [])

  const handleSearch = (e) => {
    setMarketList(markets.filter(i => i.location.toLowerCase().includes(e.toLowerCase())))
  }
  
  return (
    <div className={c.locations_container}>
      <div className={c.locations_container_title}>
        <h2>Расположение наших чаев</h2>
        <p>
          Точки продаж: 
          Во всех торговых сетях Глобус, Фрунзе, а также Народный
        </p>
      </div>
      <div className={c.search_parent}>
        <h4>Поиск по адресам:</h4>
        <Search handleSearch={handleSearch}/>
      </div>
      <div className={c.locations_container_table}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">№</th>
              <th scope="col">Наименование магазинa</th>
              <th scope="col">Адрес магазина "Народный"</th>
            </tr>
          </thead>
          <tbody>
            {
              marketList.map(item => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.caption}</td>
                  <td>{item.location}</td>
                </tr>
              ))
            }

            
            {
              marketList.length === 0 &&
              <div>
                <p className={c.none}>Такого адреса не существует!</p>
              </div>
              
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Locations;
