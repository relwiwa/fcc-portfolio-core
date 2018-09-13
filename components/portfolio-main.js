import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthenticationContext } from '../../services/authentication';
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
import SignUp from './authentication/sign-up';

const PortfolioMain = ({ onSignOut, onSuccessfulSignIn, portfolioData }) => {
  const getSubnavOfDomain = (domain) => {
    const { projects, route: domainRoute } = domain;
    const subnavEntries = [];
    projects.map(project => {
      if (!project.externalOnly) {
        subnavEntries.push({
          to: '/' + domainRoute + '/' + project.route,
          title: project.title,
        });
      }
    });
    return subnavEntries;
  };

  return (
    <div className="portfolio-main">
      <AuthenticationContext.Consumer>
        {authenticationData => <Switch>
          <Route
            exact
            path='/'
            render={() => <PortfolioHome
              portfolioData={portfolioData}      
            />}
          />
          {portfolioData['domains'].map((domain) => {
            let routes = [];
            const subnavEntries = getSubnavOfDomain(domain);
            console.log(subnavEntries);
            routes.push(<Route
              exact
              key={domain.route}
              path={'/' + domain.route}
              render={() => <Fragment>
                <PortfolioSubnav
                  subnavEntries={subnavEntries}
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
                      subnavEntries={subnavEntries}
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
              if (authenticationData.isAuthenticated !== null) {
                return <Fragment>
                  <PortfolioSubnav />
                  <SignIn
                    {...authenticationData}
                    onSignOut={onSignOut}
                    onSuccessfulSignIn={onSuccessfulSignIn}
                  />
                </Fragment>;
              }
              else {
                return null
              }
            }}
          />
          <Route
            exact
            path='/sign-up'
            render={() => {
              if (authenticationData.isAuthenticated !== null) {
                return <Fragment>
                  <PortfolioSubnav />
                  <SignUp
                    {...authenticationData}
                    onSignOut={onSignOut}
                  />
                </Fragment>;
              }
              else {
                return null
              }
            }}
          />
          <Route
            exact
            path='/dashboard'
            render={() => {
              if (authenticationData.isAuthenticated === true) {
                return <Fragment>
                    <PortfolioSubnav />
                    <PortfolioDashboard
                      authenticatedUserEmail={authenticationData.authenticatedUserEmail}
                    />
                  </Fragment>;
              }
              else if (authenticationData.isAuthenticated === false) {
                return <Fragment>
                  <PortfolioSubnav />
                  <SignIn
                    {...authenticationData}
                    onSignOut={onSignOut}
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
        </Switch>}
      </AuthenticationContext.Consumer>
    </div>
  );
}

PortfolioMain.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  onSuccessfulSignIn: PropTypes.func.isRequired,
  portfolioData: PropTypes.object.isRequired,
};

export default PortfolioMain;
