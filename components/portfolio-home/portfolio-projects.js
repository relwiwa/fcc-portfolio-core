import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

import IconLink from '../../../reusable-components/icon-link';
import ImageOrbit from '../../../reusable-components/image-orbit';
import PortfolioSection from '../../../reusable-components/portfolio-section';

const PortfolioProjects = ({ projectsData }) => {
  const renderCategory = (specs) => {
    const { description, icon, lessonsLearned, projects, route: domainRoute, title, website } = specs;
    const orbitSpecs = setupOrbitSpecs(domainRoute, projects);

    return <div style={{position: 'relative', boxShadow: '0 0 20px gray', padding: 0, paddingBottom: 60, marginBottom: 15}} className="cell medium-6" key={title}>
      <ImageOrbit orbitSpecs={orbitSpecs} />
      <Link
        to={'/' + domainRoute}
        style={{position: 'absolute', bottom: 0, left: 0, right: 0, marginBottom: 0}}
        className="button large primary expanded"
        title={'Go to ' + title + ' Projects'}
      >
        <FontAwesomeIcon icon={icon} /> {title} Projects
      </Link>
    </div>;
  };

   const setupOrbitSpecs = (domainRoute, projects) => {
    return projects.map((project, index) => {
      const { screenshot, route: projectRoute, title } = project;
      const orbitSpec = {};
      orbitSpec.imgSrc = screenshot.blue;
      orbitSpec.figCaption = title;
      orbitSpec.link = `/${domainRoute}/${projectRoute}`;
      return orbitSpec;
    });
  };

  return <PortfolioSection
    className="portfolio-projects"
    subTitle="freeCodeCamp"
    title="Projects"
  >
    <div className="grid-x grid-margin-x align-stretch">
      <div className="cell">
        <p>Can you remember the full sequence of a <IconLink link="frontend-projects/simon-game" icon="music" text="Simon Game" />? Or beat the AI in <IconLink link="frontend-projects/tic-tac-toe" icon="cubes" text="Tic Tac Toe" />?</p>
        <p>Not in the mood to play? Then checkout the fascinating patterns in Conway's <IconLink link="frontend-projects/life" icon="server" text="Life Automaton" />, all documented <IconLink link="d3-projects/meteorite-map" icon="globe" text="Meteorite Strikes" />, and many more projects!</p>
      </div>
      {projectsData.map((category) => renderCategory(category))}
    </div>
  </PortfolioSection>;
};

export default PortfolioProjects;
