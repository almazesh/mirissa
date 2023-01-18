import React from 'react'

import c from "./index.module.scss"
import { Link } from 'react-router-dom'

const MagazineCard = ({data}) => {
  return (
    <div className={c.magazineCard}>
      <Link to={`/magazine/${data.id}`}>
        <img src={data.image} alt=''/>
      </Link>
    </div>
  )
}

export default MagazineCard