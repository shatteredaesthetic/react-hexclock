import React from 'react';
import ReactDOM from 'react-dom';
import { TICKRATE } from './utils';
import Clock from './components/Clock';
require('../styles/main.scss');

const container = document.getElementById('container');
const main = () => ReactDOM.render(<Clock date={new Date()} />, container);

window.setInterval(main, TICKRATE);
