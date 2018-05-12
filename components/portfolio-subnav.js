import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/portfolio-subnav.scss';

const PortfolioSubnav = (props) => {
  const { domainRoute, projects } = props;

  return (
    <div className="portfolio-subnav">
      <div className="callout">
        <ul className="menu align-center">
          {projects ? projects.map((project) => {
            if (!project.externalOnly) {
              return (
                <li key={project.title}>
                  <NavLink
                    activeClassName="subnav-active-element"
                    exact
                    to={'/' + domainRoute + '/' + project.route}
                  >
                    {project.title}
                  </NavLink>
                </li>
              );
            }
          }) : <li><a>&nbsp;</a></li>}
        </ul>
      </div>
    </div>
  );
}

export default PortfolioSubnav;
