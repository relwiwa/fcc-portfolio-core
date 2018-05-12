import es6Promise from 'es6-promise';
es6Promise.polyfill();

import React from 'react';
import { render } from 'react-dom';

import '../config/font-awesome';
import '../styles/global-styles.scss';

import Portfolio from './components/portfolio';

render(
  <Portfolio />,
  document.getElementById('root')
);
