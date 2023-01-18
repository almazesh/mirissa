

import React from 'react'
import { GET_ACTUAL_CATALOG } from '../api/api'

const useData = () => {
  const [actual, setActual] = React.useState(null)

  React.useEffect(() => {
    GET_ACTUAL_CATALOG()
      .then(res => {
        setActual(res.data)
      })
  }, [])


  return {
    actual
  }
}

export default useData;
