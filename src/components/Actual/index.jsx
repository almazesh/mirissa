import React from 'react';
import c from './Actual.module.scss'
import ActualBanner from "./ActualBanner";
import actualBackImg_1 from '../../images/actual-banner.webp'

function Actual() {
  return (
   <>
     <div className={c.actual}>
       <div className={c.container}>
         <div className={c.title_container}>
           <span>3</span>
           <p className={c.actual_history}>
             3 года мы занимаемся чаем. Из самых популярных запросов мы составили тематические подборки. Ищите и находите нужный чай для разных ситуаций.
           </p>
           <div className={c.title}>
             <h1>Актуальные Подборки</h1>
           </div>
         </div>
         <ActualBanner background={actualBackImg_1}/>
       </div>
     </div>
   </>
  );
}

export default Actual;