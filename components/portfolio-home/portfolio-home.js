import React from 'react';

import PortfolioAbout from './portfolio-about';
import PortfolioFootprints from './portfolio-footprints';
import PortfolioIntro from './portfolio-intro';
import PortfolioProjects from './portfolio-projects';

const PortfolioHome = (props) => {
  const { portfolioData } = props;

  return (
    <div className="portfolio-home">
      <PortfolioIntro
        introData={portfolioData['intro']}
      />
      <PortfolioProjects
        projectsData={portfolioData['domains']} />
      <PortfolioAbout
        aboutData={portfolioData['about']}
      />
      <PortfolioFootprints
        footprintsData={portfolioData['footprints']}
      />
    </div>
  );
}

export default PortfolioHome;
