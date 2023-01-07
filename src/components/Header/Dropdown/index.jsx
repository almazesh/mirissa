import React from 'react';
import c from './Dropdown.module.scss'
import {burgerList} from "../../../utils/list";

function Dropdown({active, setActive}) {
  return (
    <div className={active ? `${c.dropdown_active} ${c.dropdown}` : c.dropdown}>
      <div className={c.dropdown_content}>
        <ul className={c.list}>
          {
            burgerList.map((item, id) => (
              <li key={id}>
                {item}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;