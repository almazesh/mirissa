import React from 'react';
import c from './Pagination.module.scss'
import {RxDot, RxDotFilled} from "react-icons/rx";

function PaginationCard({count, id, setId}) {
  
  return (
    <div className={c.pagination }>
      {
        Array.from({length: count}).map((item, i) => (
          <span
            key={i}
            className={c.circle}
            onClick={() => setId(i)}
          >
            {
              id === i  ? <RxDotFilled /> : <RxDot/>
            }
          </span>
        ))
      }
    </div>
  );
}

export default PaginationCard;