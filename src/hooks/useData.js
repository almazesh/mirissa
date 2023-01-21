import React from 'react'
import {GET_ACTUAL_CATALOG, GET_CONTACTS, GET_MARKET_PHOTO, GET_PRODUCTS} from '../api/api'

const useData = () => {
  const [actual, setActual] = React.useState(null)
  const [marketPhoto, setMarketPhoto] = React.useState(null)
  const [contacts, setContacts] = React.useState(null)
  const [catalog, setCatalog] = React.useState(null)
  
  React.useEffect(() => {
    GET_ACTUAL_CATALOG()
      .then(res => {
        setActual(res.data)
      })
    
    GET_MARKET_PHOTO()
      .then(res => {
        setMarketPhoto(res.data)
      })
    
    GET_CONTACTS()
      .then(res => {
        setContacts(res.data)
      })
    GET_PRODUCTS()
      .then(res => {
        setCatalog(res.data)
      })
  }, [])
  
  
  return {
    actual,
    marketPhoto,
    contacts,
    catalog,
  }
}

export default useData;
