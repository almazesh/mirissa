import React from 'react';
import c from './EmptyText.module.scss'

function Empty(props) {
  return (
    <div className={c.empty}>
      <div className={c.container}>
        <img src="/assets/empty.png" alt="" />
        <span>Данные отсутствуют</span>
      </div>
    </div>
  );
}

export default Empty;