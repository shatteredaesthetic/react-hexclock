import React from 'react';
import { dClockPipe } from '../utils';

export default ({ date }) => (
  <div className="digital">
    {dClockPipe(date)}
  </div>
);
