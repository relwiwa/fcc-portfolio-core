import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import PortfolioFooter from './portfolio-footer';
import PortfolioHeader from './portfolio-header';
import PortfolioMain from './portfolio-main';
import ScrollToTop from '../../reusable-components/scroll-to-top';

import '../styles/portfolio.scss';

import portfolioData from '../data/portfolio';

const Portfolio = (props) => <BrowserRouter>
  <ScrollToTop>
    <div className="portfolio">
      <PortfolioHeader
        projectsData={portfolioData['domains']}
      />
      <PortfolioMain
        portfolioData={portfolioData}
      />
      <PortfolioFooter
        contactData={portfolioData['contact']}
        projectsData={portfolioData['domains']}
      />
    </div>
  </ScrollToTop>
</BrowserRouter>;

export default Portfolio;
