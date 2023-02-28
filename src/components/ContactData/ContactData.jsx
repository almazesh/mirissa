

import React from 'react'
import useData from '../../hooks/useData'
import { Loader } from '../Loader/Loader';

import c from "./index.module.scss"
import Empty from "../EmptyText";

const ContactData = () => {

  const { contacts } = useData();

  return (
    <div className={c.contacts_row}>
      {!contacts && <div className={c.loader}><Loader /></div>}

      {contacts === "undefined" && <p>Empty</p>}
  
      {contacts?.length === 0 && <p><Empty/></p>}
      
      {contacts && (
        <React.Fragment>
          <div className={c.data}>
            <h2>Единый контактный телефон:</h2>
            <a href={`tel:996700111222`}>{contacts.phone_number}</a>
          </div>
          <div className={c.data}>
            <h2>Электронная почта:</h2>
            <a href={`mailto:${contacts.email}?subject=Я хочу заказать чай`}>
              {contacts.email}
              <img className='gmail' src='https://cdn-icons-png.flaticon.com/512/281/281769.png' alt=''/>
            </a>    
          </div>
          {
            contacts.contact.map(item => (
              <div className={c.data}>
                <h2>Инстаграм:</h2>
                <a href={item.link}>
                  mirissa.tea 
                  <img className='inst' src={item.icon} alt=''/>
                </a>
              </div>
            ))
          }
        </React.Fragment>
      )}
    </div>
  )
}

export default ContactData
