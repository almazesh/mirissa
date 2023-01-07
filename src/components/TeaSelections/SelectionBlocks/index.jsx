import React from 'react';
import c from './SelectionBlocks.module.scss'

function SelectionBlocks({title, count, background}) {
  return (
    <div className={c.block}>
      <div className={c.block_img}>
        <img src={background} alt="" />
        <div className={c.block_inner}>
          <h3>{
            title.length > 33
            ? title.split('').slice(0, 33).join('') + '...'
              : title
          }</h3>
          <span>{count}</span>
        </div>
        <div className={c.btn}>
          <button>смотреть все</button>
        </div>
      </div>
    </div>
  );
}

export default SelectionBlocks;