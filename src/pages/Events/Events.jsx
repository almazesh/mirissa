
import React from 'react'

import c from "./index.module.scss"

import Videos from "../../assets/video/IMG_0601.mp4"

const Events = () => {
  return (
    <div className={c.events_container}>
      <div className={c.events_container_title}>
        <h2>События Mirissa</h2>
      </div>

      <div className={c.events_container_row}>
        <video controls>
          <source type='video/mp4' src={Videos}/>
        </video>
      </div>
    </div>
  )
}

export default Events
