import React from 'react';
import c from './FooterBlock_1.module.scss'
import {aboutCompanyList, business, contactsList, forClient} from "../../utils/list";
import { Link } from 'react-router-dom';

function FooterTop() {
  return (
    <div className={c.footer_1}>
      <ul className={c.footer_list}>
        <h1>Контакты</h1>
        {
          contactsList.map((item, id) => (
            <li key={id}>
              <Link to={item.route}>
                {item.caption}
              </Link>
            </li>
          ))
        }
      </ul>
      <ul className={c.footer_list}>
        <h1>О компании</h1>
        {
          aboutCompanyList.map((item, id) => (
            <li key={id}>
              <Link to={item.route}>
                {item.caption}
              </Link>
            </li>
          ))
        }
      </ul>
      <ul className={c.footer_list}>
        <h1>Клиентам</h1>
        {
          forClient.map((item, id) => (
            <li key={id}>
              <Link to={item.route}>
                {item.caption}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default FooterTop;