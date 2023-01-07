import React from 'react';
import c from './News.module.scss'
import {news_list} from "../../utils/list";
import NewsBlock from "./NewsBlock";

function News() {
  return (
    <div className={c.news}>
      <div className={c.news_title}>
        <h1>Статьи и новости</h1>
      </div>
      <div className={c.container}>
        <div className={c.article_block}>
          <p className={c.article_title}>
            ВСЕ СТАТЬИ
          </p>
          <div className={c.article_img}>
            <img src="/assets/article-img.webp" alt=""/>
          </div>
          <div className={c.article_btn}>
            <h1>
              Влияние кофе на организм
            </h1>
            <button>ПОДРОБНЕЕ</button>
          </div>
        </div>
        <div className={c.news_block}>
          <p className={c.news_block_title}>
            ВСЕ НОВОСТИ
          </p>
          {
            news_list.map(item => (
              <NewsBlock key={item.id} {...item}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default News;