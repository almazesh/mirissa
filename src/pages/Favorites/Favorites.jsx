

import React from 'react'

import c from "./Favorites.module.scss"

function Favorites() {
  return (
    <div className={c.favorites_container}>
      <div className={c.favorites_container_title}>
        <h2>Избранное</h2>
      </div>
    </div>
  )
}

export default Favorites
