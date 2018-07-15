import React from 'react';

import PortfolioFooter from './portfolio-footer';
import PortfolioHeader from './portfolio-header';
import PortfolioMain from './portfolio-main';

import '../styles/portfolio.scss';

import portfolioData from '../data/portfolio';

const Portfolio = (props) => <div className="portfolio">
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
</div>;

export default Portfolio;
