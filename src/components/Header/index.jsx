import React from 'react';
import c from './Header.module.scss'
import {navbarList} from "../../utils/list";
import {GoLocation} from "react-icons/go";
import {RxHamburgerMenu} from "react-icons/rx";
import {AiOutlineClose} from "react-icons/ai";
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { GrFavorite } from "react-icons/gr"

import Tree from "../../assets/long-garland-christmas-tree-branches-vector-illustration-christmas-garland-beautiful-evergreen-garland-xmas-tree-branches-105662649-removebg-preview.png"

function Header() {
  const [burgerActive, setBurgerActive] = React.useState(false)
  const navigate = useNavigate();
  
  return (
    <div className={c.header}>
      {Array.from({length:199}).map((item,index) => <div key={index} className={c.snow}></div>)}
      <div className={c.container}>
        <img className={c.tree} src={Tree} alt=''/>
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
            <Link to={"/locations"}>
              <GoLocation/>
              <span>Магазины</span>
            </Link>
          </div>
          <div className={c.search}>
            <Link to={"/contacts"}>
              <span>Контакты</span>
            </Link>
          </div>
          <div className={c.social_icons}>
            <GrFavorite onClick={() => navigate("/favorites")}/>
            <a className={c.number} href="tel:996700111222">+996700111222</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;