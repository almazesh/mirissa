import React from 'react';
import c from './Header.module.scss'
import {navbarList} from "../../utils/list";
import {GoLocation} from "react-icons/go";
import {BiSearch} from "react-icons/bi";
import { BsWhatsapp} from "react-icons/bs";
import {RxHamburgerMenu} from "react-icons/rx";
import {FaTelegramPlane} from "react-icons/fa";
import Dropdown from "./Dropdown";
import {AiOutlineClose} from "react-icons/ai";
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [burgerActive, setBurgerActive] = React.useState(false)
  
  return (
    <div className={c.header}>
      <div className={c.container}>
        <span
          className={c.burger}
          onClick={() => setBurgerActive(prev => !prev)}
        >
          { burgerActive ? <AiOutlineClose/> :  <RxHamburgerMenu/>}
        </span>
        {/* <Dropdown active={burgerActive} setActive={setBurgerActive}/> */}
        <ul className={c.nav_list}>
          {
            navbarList.map(item => (
              <li key={item.id}>
                <NavLink className={({isActive}) => isActive ? c.activeList : ""} to={item.route}>
                  {item.title}
                </NavLink>
              </li>
            ))
          }
        </ul>
        <div className={c.nav_logo}>
          <Link to={"/"}>
            <img src="/assets/nav-logo.png" alt=""/>
            <p>~Цейлонский чай | Шри-Ланка~</p>
          </Link>
        </div>
        <div className={c.nav_info}>
          <div className={c.store}>
            <GoLocation/>
            <span>Магазины</span>
          </div>
          <div className={c.search}>
            <BiSearch/>
            <span>Поиск</span>
          </div>
          <div className={c.social_icons}>
            <BsWhatsapp/>
            <FaTelegramPlane/>
            <a className={c.number} href="tel:996700111222">+996700111222</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;