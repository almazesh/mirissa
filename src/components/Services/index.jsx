import React from 'react';
import c from './Services.module.scss'
import url from '../../images/selections-banner-2.webp'

function Services() {
  return (
    <div className={c.services}>
      <div className={c.services_top}>
        <div className={c.top_text}>
          <h1>Открой свой магазин Унция</h1>
          <p>Прочитайте про условия франчайзинга на портале про чайный бизнес...</p>
        </div>
        <div className={c.top_img}>
          <img src={url} alt="" />
        </div>
      </div>
      <div className={c.services_down}>
        <div className={c.down_block}>
          <h2>
            Корпоративные подарки с Вашим логотипом
          </h2>
          <img src="/assets/services-img-1.webp" alt="" />
          <div className={c.delivery}>
            <h3>
              Соберем
              и доставим за день
            </h3>
            <button>
              ПОДРОБНЕЕ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;