import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/portfolio-subnav.scss';

const PortfolioSubnav = (props) => {
  const { domainRoute, projects, subnavEntries } = props;

  return (
    <div className="portfolio-subnav">
      <div className="callout">
        <ul className="menu align-center">
          {subnavEntries
            ? subnavEntries.map(subnavEntry => <li key={subnavEntry.title}>
              <NavLink
                activeClassName="subnav-active-element"
                exact
                to={subnavEntry.to}
              >
                {subnavEntry.title}
              </NavLink>
            </li>)
            : <li><a>&nbsp;</a></li>
          }
        </ul>
      </div>
    </div>
  );
}

export default PortfolioSubnav;
