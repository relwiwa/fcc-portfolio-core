import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import '../styles/portfolio-main.scss';

import Portfolio404 from './portfolio-404';
import PortfolioAbout from './portfolio-home/portfolio-about';
import PortfolioContact from './portfolio-home/portfolio-contact';
import PortfolioDomain from './portfolio-domain';
import PortfolioDomainProject from './portfolio-domain-project';
import PortfolioHome from './portfolio-home/portfolio-home';
import PortfolioSubnav from './portfolio-subnav';

const PortfolioMain = (props) => {
  const { portfolioData } = props;

  return (
    <div className="portfolio-main">
      <Switch>
        <Route
          exact
          path='/'
          render={() => <PortfolioHome
            portfolioData={portfolioData}      
          />}
        />
        {portfolioData['domains'].map((domain) => {
          let routes = [];
          routes.push(<Route
            exact
            key={domain.route}
            path={'/' + domain.route}
            render={() => <Fragment>
              <PortfolioSubnav
                projects={domain.projects}
                domainRoute={domain.route}          
              />
              <PortfolioDomain
                domainData={domain}
              />
            </Fragment>}
          />);
          domain['projects'].map((project) => {
            if (!project.externalOnly) {
              routes.push(<Route
                key={project.route}
                path={'/' + domain.route + '/' + project.route}
                render={() => <Fragment>
                  <PortfolioSubnav
                    projects={domain.projects}
                    domainRoute={domain.route}          
                  />
                  <PortfolioDomainProject
                    domain={domain.domain}
                    projectData={project}
                  />
                </Fragment>}
              />);
            }
          });
          return routes;
        })}
        <Route
          exact
          path='/about'
          render={() => <Fragment>
            <PortfolioSubnav />
            <PortfolioAbout
              aboutData={portfolioData['about']}
            />
          </Fragment>}
        />
        <Route
          exact
          path='/contact'
          render={() => <Fragment>
            <PortfolioSubnav />
            <PortfolioContact
              contactData={portfolioData['contact']}
            />
          </Fragment>}
        />
        <Route
          exact
          render={() => <Fragment>
            <PortfolioSubnav />
            <Portfolio404 />
          </Fragment>}
        />
      </Switch>
    </div>
  );
}

export default PortfolioMain;
