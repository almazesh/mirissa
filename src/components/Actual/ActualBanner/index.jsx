import React from 'react';
import { Link } from 'react-router-dom';
import MagazineCard from '../../MagazineCard/MagazineCard';
import c from './ActualBanner.module.scss'

function ActualBanner({background, type, title, text}) {

  return (
    <div className={c.actual}>
      <div
        className={c.actual_banner}
        style={{
          backgroundImage: `url(${background})`
        }}>
        <p>
          {type}
        </p>
        <h2>
          {title}
        </h2>
        <p className={c.actual_text}>
          {text}
        </p>
      </div>
      <div className={c.cards}>
        <MagazineCard />
        <MagazineCard />
        <MagazineCard />
        <MagazineCard />
      </div>

      <div className={c.more}>
        <Link to={"/magazine"}>
          Подробнее 
        </Link>
      </div>
    </div>
  );
}

export default ActualBanner;


