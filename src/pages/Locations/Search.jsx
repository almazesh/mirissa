

import React from 'react'

const Search = ({handleSearch}) => {
  return (
    <section>
      <input 
        type={"text"}
        placeholder="Поиск..."
        onChange={(e) => handleSearch(e.target.value)}
      />
      <img src='https://www.iconpacks.net/icons/2/free-search-icon-2903-thumb.png' alt=''/>
    </section>
  )
}

export default Search