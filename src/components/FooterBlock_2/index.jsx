import React from 'react';
import c from './FooterBlock_2.module.scss'
import {ImWhatsapp} from "react-icons/im";
import {FaTelegramPlane} from "react-icons/fa";

function FooterBottom() {
  return (
    <div className={c.footer_2}>
      <div className={c.container}>
        <div className={c.left_block}>
          <div className={c.footer_number}>
            <a href="tel:88005552835">
              8 800 555-28-35
            </a>
            <p>
              Звонок по Кыргызстану бесплатно c 10:45 до 22:00
            </p>
          </div>
          <div className={c.whatsapp}>
            <ImWhatsapp/>
            Whatsapp
          </div>
          <div className={c.telegram}>
            <FaTelegramPlane/>
            Telegram
          </div>
        </div>
        <div className={c.right_block}>
          <ul className={c.right_list}>
            <li>
              О подарочном сертификате
            </li>
            <li>
              Политика конфиденциальности
            </li>
            <li>
              Договор оферты
            </li>
          </ul>
          <div className={c.right_info}>
            <div>© mirissa.info, {new Date().getFullYear()}</div>
            <div>Разработка сайта - cryxxen.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;