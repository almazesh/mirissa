import React from 'react'

import c from "./index.module.scss"

import Tea1 from "../../images/magazine/IMG_9407.png"
import Tea2 from "../../images/magazine/IMG_9960.png"

const PhotoTea = () => {
  return (
    <div className={c.photo_parent}>
      <div className={c.photo_parent_title}>
        <h2>Фото чаев на полках</h2>
      </div>

      <div className={c.photo_parent_row}>
        <img src={Tea1} alt=''/>
        <img src={Tea2} alt=''/>
      </div>
    </div>
  )
}

export default PhotoTea
