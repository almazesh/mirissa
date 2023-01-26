import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../../../hooks/useData';
import { Loader } from '../../Loader/Loader';
import MagazineCard from '../../MagazineCard/MagazineCard';
import c from './ActualBanner.module.scss'

function ActualBanner({background}) {
  const { actual } = useData();
  
  return (
    <div className={c.actual}>
      <div
        className={c.actual_banner}
        style={{
          backgroundImage: `url(${background})`
        }}>
        <p>
          {actual?.length} видов
        </p>
        <h2>
          «А что остальные берут?». Топ-{actual?.length} чистые сорта
        </h2>
        <p className={c.actual_text}>
          Топ-{actual?.length} чистых сортов. Классика, проверенная временем и выбором покупателей «Mirissa»
        </p>
      </div>
      <div className={c.cards}>
        {actual?.length === 0 && <p>Empty</p>}

        {!actual && <div className={c.loader}><Loader /></div>}

        {actual?.map(item => <MagazineCard data={item} key={item.id}/>)}
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


