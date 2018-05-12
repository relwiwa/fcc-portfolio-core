import React from 'react';
import { Link } from 'react-router-dom';

import PortfolioSection from '../../../reusable-components/portfolio-section';
import ImageOrbit from '../../../reusable-components/image-orbit';

const PortfolioProjects = ({ projectsData }) => {
  const renderCategory = (specs) => {
    const { description, lessonsLearned, projects, route: domainRoute, title, website } = specs;
    const orbitSpecs = setupOrbitSpecs(domainRoute, projects);

    return <div style={{position: 'relative', boxShadow: '0 0 20px gray'}} className="cell medium-6" key={title}>
      <ImageOrbit orbitSpecs={orbitSpecs} />
      <div style={{padding: '1rem', paddingBottom: 55}}>
        {description.split('.').map((item) => <p className="text-center" key={item.substr(0, 8)}>{item}</p>)}
      </div>
        <Link
          style={{position:'absolute', bottom: 0, left: 0, right: 0, marginBottom: 0}}
          to={'/' + domainRoute}
          className="button large primary expanded"
          title={'Go to ' + title + ' Projects'}
        >
          {title} Projects
        </Link>
    </div>;
  };

   const setupOrbitSpecs = (domainRoute, projects) => {
    return projects.map((project, index) => {
      const { screenshot, route: projectRoute, title } = project;
      const orbitSpec = {};
      orbitSpec.imgSrc = screenshot;
      orbitSpec.figCaption = title;
      orbitSpec.link = `/${domainRoute}/${projectRoute}`;
      return orbitSpec;
    });
  };

  return <div className="portfolio-projects grid-container grid-container-padded" id="portfolio-projects">
    <PortfolioSection
      subTitle="freeCodeCamp"
      title="Projects"
    >
      <div className="grid-x grid-margin-x grid-margin-y align-stretch">
          {projectsData.map((category) => renderCategory(category))}
      </div>
    </PortfolioSection>
  </div>;
};

export default PortfolioProjects;
