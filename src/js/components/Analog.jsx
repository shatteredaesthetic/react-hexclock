import React from 'react';
import { toggle, aClockRows } from '../utils';

const ARow = ({ numStr }) => {
  const row = numStr.split('').map(x => toggle(x));
  return (
    <div className="analog-row">
      {row.map((x, i) => <div className={`a_cell ${x}`} key={`cell-${i}`}></div>)}
    </div>
  );
};

export default ({ date }) => {
  const clock = aClockRows(date);
  return (
    <div className="analog">
      {clock.map((num, i) => <ARow numStr={num} key={`row-${i}`} />)}
    </div>
  );
};
