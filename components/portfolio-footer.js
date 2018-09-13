import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/portfolio-footer.scss';

const PortfolioFooter = (props) => {
  const { footprintsData, projectsData } = props;

  const renderFootprintsItems = (items) => {
    const domains = Object.keys(items);
    
    return (
      <div className="cell">
        <h6>
          <NavLink
            to={'/about/web-footprints'}
            title={'Go to Web Footprints Section'}
          ><FontAwesomeIcon icon="shoe-prints" /> Web Footprints</NavLink>
        </h6>
        <ul className="no-bullet">
          {domains.map(domain => {
            return items[domain].sites.map(site => (
              <li key={site.title}>
                <a target="blank" href={site.url} title={site.description}>{site.title}</a>
              </li>
            ));
          })}
        </ul>
      </div>
    );
  };

  const renderProjectCategory = (category) => {
    const { domain, projects, title } = category;

    return (
      <div className="cell" key={title}>
        <h6>
          <NavLink
            to={'/' + domain + '-projects'}
            title={'Go to ' + domain + ' projects page'}
          ><FontAwesomeIcon icon={category.icon} /> {title} Projects</NavLink>
        </h6>
        <ul className="no-bullet">
          {projects.map((project) => (
            <li key={project.title}>
              <NavLink
                to={'/' + domain + '-projects/' + project.route}
                title={'Go to ' + project.title + ' Project'}
              >{project.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="portfolio-footer">
      <div className="callout">
        <div className="grid-container grid-container-padded">
          <div className="grid-x grid-padding-x small-up-2 large-up-4">
            {projectsData.map((category) => renderProjectCategory(category))}
            {renderFootprintsItems(footprintsData)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioFooter;
