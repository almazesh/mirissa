

import React from 'react'

import c from "./index.module.scss"

const ContactData = () => {
  return (
    <div className={c.contacts_row}>
      <div className={c.data}>
        <h2>Единый контактный телефон:</h2>
        <a href='tel:996700111222'>+996700111222</a>
      </div>
      <div className={c.data}>
        <h2>Электронная почта:</h2>
        <a href={`mailto:mirissa@gmail.com?subject=Я хочу заказать чай`}>
          mirissa@gmail.com
          <img className='gmail' src='https://cdn-icons-png.flaticon.com/512/281/281769.png' alt=''/>
        </a>    
      </div>
      <div className={c.data}>
        <h2>Инстаграм:</h2>
        <a href='https://instagram.com/mirissa.tea?igshid=YmMyMTA2M2Y='>
          mirissa.tea 
          <img className='inst' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png' alt=''/>
        </a>
      </div>
    </div>
  )
}

export default ContactData
