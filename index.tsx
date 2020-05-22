import es6Promise from 'es6-promise';
es6Promise.polyfill();

import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import { messages } from '../config/messages';

import '../config/font-awesome';
import '../styles/global-styles.scss';

import Portfolio from './components/portfolio';
import ScrollToTop from '../reusable-components/scroll-to-top';

let locale = navigator ? navigator['language'].substr(0,2) : 'en';
locale = messages.hasOwnProperty(locale) ? locale : 'en';

hydrate(
  <IntlProvider
    defaultLocale="en"
    locale={locale}
    messages={messages[locale]}
  >
    <BrowserRouter>
      <ScrollToTop>
        <Portfolio />
      </ScrollToTop>
    </BrowserRouter>
  </IntlProvider>,
  document.getElementById('root')
);
