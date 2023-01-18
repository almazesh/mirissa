

import React from 'react'
import ContactData from '../../components/ContactData/ContactData';
import Tabs from '../../components/Tabs/Tabs';
import c from "./index.module.scss"

const Contacts = () => {
  const [Tablet, setTabs] = React.useState("ContactData")
  const [component,setComponent] = React.useState(null)

  return (
    <div className={c.contacts_container}>
      <div className={c.contacts_container_title}>
        <h2>Контакты</h2>
      </div>

      <div className={c.contacts_container_tabs}>
        <Tabs setTabs={setTabs} tabs={Tablet} setComponent={setComponent}/>
      </div>

      <div className={c.contacts_container_components}>
        {component ? <component.element /> : <ContactData />}
      </div>
    </div>
  )
}

export default Contacts;