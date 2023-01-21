import React from 'react';
import c from './Dropdown.module.scss'
import {burgerList, navbarList} from "../../../utils/list";
import {NavLink} from "react-router-dom";

function Dropdown({active, setActive}) {
  return (
    <div className={active ? `${c.dropdown_active} ${c.dropdown}` : c.dropdown}>
      <div className={c.dropdown_content}>
        <ul className={c.list}>
          {
            navbarList.map((item, id) => (
              <li key={id} onClick={() => setActive(false)}>
                <NavLink
                  className={({isActive}) => isActive ? c.activeList : ""}
                  to={item.route}
                >
                  {item.title}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;