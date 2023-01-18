import React from 'react'
import { tabList } from '../../utils/list'

import c from "./index.module.scss"



const Tabs = ({tabs, setTabs, setComponent}) => {
  return (
    <ul className={c.tabs_row}>
      {tabList.map(item => 
        <li 
          className={tabs === item.route && c.activeTab} 
          onClick={() => {
            setTabs(item.route)
            setComponent(item)
          }} 
          key={item.id}
        >
          {item.caption}
        </li>
      )}
    </ul>
  )
}

export default Tabs
