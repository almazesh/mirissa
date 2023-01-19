import React from 'react'

import c from "./index.module.scss"


import useData from '../../hooks/useData'
import { Loader } from '../Loader/Loader'

const PhotoTea = () => {
  const { marketPhoto } = useData();

  console.log(marketPhoto)

  return (
    <div className={c.photo_parent}>
      <div className={c.photo_parent_title}>
        <h2>Фото чаев на полках</h2>
      </div>

      <div className={c.photo_parent_row}>
        {marketPhoto?.length === 0 && <p>Empty</p>}

        {!marketPhoto && <Loader />}

        {marketPhoto?.map(item => <img key={item.id} src={item.image} alt=''/>)}
      </div>
    </div>
  )
}

export default PhotoTea
