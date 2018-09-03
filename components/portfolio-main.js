import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import '../styles/portfolio-main.scss';

import Portfolio404 from './portfolio-404';
import PortfolioAbout from './portfolio-home/portfolio-about';
import PortfolioContact from './portfolio-home/portfolio-contact';
import PortfolioDashboard from './portfolio-dashboard';
import PortfolioDomain from './portfolio-domain';
import PortfolioDomainProject from './portfolio-domain-project';
import PortfolioHome from './portfolio-home/portfolio-home';
import PortfolioSubnav from './portfolio-subnav';
import SignIn from './authentication/sign-in';

const PortfolioMain = ({ authenticatedUserEmail, isAuthenticated, onSuccessfulSignIn, portfolioData }) => {
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
                exact
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
          path='/sign-in'
          render={() => {
            if (isAuthenticated === true) {
              return <Redirect to="/dashboard" />;
            }
            else if (isAuthenticated === false) {
              return <Fragment>
                <PortfolioSubnav />
                <SignIn
                  onSuccessfulSignIn={onSuccessfulSignIn}
                />
              </Fragment>;
            }
            else {
              return <Fragment>neither true nor false</Fragment>
            }
          }}
        />
        <Route
          exact
          path='/dashboard'
          render={() => {
            if (isAuthenticated === true) {
              return <Fragment>
                  <PortfolioSubnav />
                  <PortfolioDashboard
                    authenticatedUserEmail={authenticatedUserEmail}
                  />
                </Fragment>;
            }
            else if (isAuthenticated === false) {
              return <Fragment>
                <PortfolioSubnav />
                <SignIn
                  onSuccessfulSignIn={onSuccessfulSignIn}
                />
              </Fragment>;
            }
            else {
              return null;
            }
          }}
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

PortfolioMain.propTypes = {
  authenticatedUserEmail: PropTypes.string,
  isAuthenticated: PropTypes.bool,
  onSuccessfulSignIn: PropTypes.func.isRequired,
  portfolioData: PropTypes.object.isRequired,
};

export default PortfolioMain;
