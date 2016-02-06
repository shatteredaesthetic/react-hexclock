import R from 'ramda';

export const TICKRATE = (24 * 60 * 60 * 1000) / 65536;

const toString = r => x => x.toString(r);
const strSplit = sep => str => str.split(sep);
const pad = size => num => {
  let n = num;
  while (n.length < size) { n = `0${n}`; }
  return n;
};
const toInt = radix => str => parseInt(str, radix);
const getCurrTime = (now) => {
  const midnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0, 0, 0);
  const msecs = now.getTime() - midnight.getTime();
  return Math.floor(msecs / TICKRATE);
};
const toHexArr = R.compose(
  strSplit(''),
  pad(4),
  toString(16),
  getCurrTime
);
const aRowPipe = R.compose(pad(4), toString(2), toInt(16));
const formatDigital = d => `${d[0]}.${d[1]}${d[2]}.${d[3]}`;

export const toggle = x => !!parseInt(x, 10) ? 'circle_on' : 'circle_off';
export const aClockRows = R.compose(R.map(aRowPipe), toHexArr);
export const dClockPipe = R.compose(formatDigital, toHexArr);
