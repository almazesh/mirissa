import React from 'react';
import c from './NewsBlock.module.scss'

function NewsBlock({title, text, date}) {
  return (
    <div className={c.news_card}>
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{date}</span>
    </div>
  );
}

export default NewsBlock;