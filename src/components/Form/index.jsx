import React from 'react';
import c from './Form.module.scss'
import {SlSocialVkontakte} from "react-icons/sl";
import {FaTelegramPlane} from "react-icons/fa";
import {IoIosArrowForward} from "react-icons/io";

function Form(props) {
  const [checked, setChecked] = React.useState(true)
  const changeCheckbox = () => {
    setChecked(prev => !prev)
  }
  return (
    <div className={c.form}>
      <div className={c.form_container}>
        <div className={c.form_row}>
          <div className={c.form_text}>
            <h2>Будьте в курсе</h2>
            <p>
              Подпишитесь на последние обновления и узнавайте о новинках и специальных предложениях первыми
            </p>
          </div>
          <div className={c.form_input}>
            <div className={c.input}>
              <input className={c.input_text} type="text" />
              <div className={c.checkbox} onClick={changeCheckbox}>
                <input className={c.input_ckeckbox} type="checkbox" checked={checked} onChange={changeCheckbox}/>
                <span>Cогласие на обработку персональных данных.</span>
              </div>
            </div>
            <div className={c.form_btn}>
              <button>ОТПРАВИТЬ</button>
              <IoIosArrowForward/>
            </div>
          </div>
          
        </div>
        <div className={c.social_link}>
          <div className={c.social_icon}>
            <SlSocialVkontakte/>
            <span>Vkontakte</span>
          </div>
          <div className={c.social_icon}>
            <FaTelegramPlane/>
            <span>Telegram</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;