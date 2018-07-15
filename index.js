import es6Promise from 'es6-promise';
es6Promise.polyfill();

import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import '../config/font-awesome';
import '../styles/global-styles.scss';

import Portfolio from './components/portfolio';
import ScrollToTop from '../reusable-components/scroll-to-top';

hydrate(
  <BrowserRouter>
    <ScrollToTop>
      <Portfolio />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root')
);
