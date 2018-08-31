import React from 'react';

import IconLink from '../../reusable-components/icon-link';
import PortfolioSection from '../../reusable-components/portfolio-section';

const Portfolio404 = (props) => (
  <PortfolioSection
    className="portfolio-404"
    subTitle="404"
    title="Not Found"
  >
    <p>No such page on this website</p>
    <p>Go to <IconLink
      icon="home"
      link="/"
      text="Home Page"
    /></p>
  </PortfolioSection>
);

export default Portfolio404;
