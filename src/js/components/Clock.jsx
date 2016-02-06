import React from 'react';
import DClock from './Digital';
import AClock from './Analog';

export default ({ date }) => (
  <div className="clock-container">
    <DClock date={date} />
    <AClock date={date} />
  </div>
);
