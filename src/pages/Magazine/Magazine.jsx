

import React from 'react'
import { Link } from 'react-router-dom'
import { Loader } from '../../components/Loader/Loader'
import ViewsTea from '../../components/ViewsTea/ViewsTea'
import { ScrollToTop } from '../../helpers/scroll'
import useData from '../../hooks/useData'

import c from "./index.module.scss"


const Magazine = () => {
  const { actual } = useData();

  React.useEffect(() => {
    ScrollToTop()
  }, [])

  return (
    <div className={c.magazine_container}>
      <div className={c.magazine_title}>
        <h2>Каталог</h2>
      </div>

      <ViewsTea />

      <div className={c.magazine_catalog}>
        <h2>Подборки</h2>

        <div className={c.magazine_row}>
          {actual?.length === 0 && <p>Empty</p>}

          {!actual && <Loader />}

          {actual?.map(item => (
            <Link to={`/magazine/${item.id}`}>
              <div key={item.id} className={c.card}>
                <img src={item.image} alt=''/>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Magazine