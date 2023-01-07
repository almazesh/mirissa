import React from 'react'

import c from "./index.module.scss"
import MagazineImg from "../../images/magazine/16ee22f1579a8a2c-2167-1.png"
import { Link } from 'react-router-dom'

const MagazineCard = () => {
  return (
    <div className={c.magazineCard}>
      <Link to={'/magazine'}>
        <img src={MagazineImg} alt=''/>
      </Link>
    </div>
  )
}

export default MagazineCard