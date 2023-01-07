import React from 'react';
import c from './TeaSelections.module.scss'
import {selectionsCard} from "../../utils/list";
import SelectionBlocks from "./SelectionBlocks";

function TeaSelections() {
  return (
    <div className={c.selections}>
      <div className={c.selections_title}>
        <h1>Актуальные подборки  чая</h1>
      </div>
      <div className={c.selection_blocks}>
        {
          selectionsCard.map(item => (
            <SelectionBlocks key={item.id} {...item}/>
          ))
        }
      </div>
    </div>
  );
}

export default TeaSelections;