import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { AuthenticationContext } from '../../services/authentication';
import '../styles/portfolio-main.scss';

import AuthenticationDashboard from './authentication/authentication-dashboard';
import Portfolio404 from './portfolio-404';
import PortfolioAbout from './portfolio-home/portfolio-about';
import PortfolioFootprints from './portfolio-home/portfolio-footprints';
import PortfolioDomain from './portfolio-domain';
import PortfolioDomainProject from './portfolio-domain-project';
import PortfolioHome from './portfolio-home/portfolio-home';
import PortfolioSubnav from './portfolio-subnav';
import SignIn from './authentication/sign-in';
import SignOut from './authentication/sign-out';
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
  
  const getSubnavOfInteraction = (isAuthenticated) => {
    const subnavEntries = [];
    if (isAuthenticated === true) {
      subnavEntries.push({
        to: '/interaction/dashboard',
        title: 'Dashboard',
      });
      subnavEntries.push({
        to: '/interaction/sign-out',
        title: 'Sign Out',
      });
    }
    else if (isAuthenticated === false) {
      subnavEntries.push({
        to: '/interaction/sign-in',
        title: 'Sign In',
      });
      subnavEntries.push({
        to: '/interaction/sign-up',
        title: 'Sign Up',
      });
    }
    return subnavEntries;
  }

  const subnavEntriesAbout = [{
    to: '/about/free-code-camp-walter',
    title: 'freeCodeCamp Walter',
  }, {
    to: '/about/web-footprints',
    title: 'Web Footprints',
  }];

  return (
    <div className="portfolio-main">
      <AuthenticationContext.Consumer>
        {(authenticationData) => <Switch>
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
            path='/about/free-code-camp-walter'
            render={() => <Fragment>
              <PortfolioSubnav
                subnavEntries={subnavEntriesAbout}
              />
              <PortfolioAbout
                aboutData={portfolioData['about']}
              />
            </Fragment>}
          />
          <Route
            exact
            path='/about/web-footprints'
            render={() => <Fragment>
              <PortfolioSubnav
                subnavEntries={subnavEntriesAbout}
              />
              <PortfolioFootprints
                footprintsData={portfolioData['footprints']}
              />
            </Fragment>}
          />
          <Route
            exact
            path='/interaction/sign-in'
            render={() => {
              if (authenticationData.isAuthenticated === false) {
                return <Fragment>
                  <PortfolioSubnav
                    subnavEntries={getSubnavOfInteraction(authenticationData.isAuthenticated)}
                  />
                  <SignIn
                    {...authenticationData}
                    onSuccessfulSignIn={onSuccessfulSignIn}
                  />
                </Fragment>;
              }
              else if (authenticationData.isAuthenticated === true) {
                return <Redirect to="/interaction/dashboard" />;
              }
              else {
                return null
              }
            }}
          />
          <Route
            exact
            path='/interaction/sign-up'
            render={() => {
              if (authenticationData.isAuthenticated === false) {
                return <Fragment>
                  <PortfolioSubnav
                    subnavEntries={getSubnavOfInteraction(authenticationData.isAuthenticated)}
                  />
                  <SignUp
                    {...authenticationData}
                    onSuccessfulSignIn={onSuccessfulSignIn}
                  />
                </Fragment>;
              }
              else if (authenticationData.isAuthenticated === true) {
                return <Redirect to="/interaction/dashboard" />
              }
              else {
                return null
              }
            }}
          />
          <Route
            exact
            path='/interaction/sign-out'
            render={() => {
              if (authenticationData.isAuthenticated === true) {
                return <Fragment>
                  <PortfolioSubnav
                    subnavEntries={getSubnavOfInteraction(authenticationData.isAuthenticated)}
                  />
                  <SignOut
                    authenticatedUserEmail={authenticationData.authenticatedUserEmail}
                    onSignOut={onSignOut}
                  />
                </Fragment>;
              }
              else if (authenticationData.isAuthenticated === false) {
                return <Redirect to="/interaction/sign-in" />
              }
              else {
                return null
              }
            }}
          />
          <Route
            exact
            path='/interaction/dashboard'
            render={() => {
              if (authenticationData.isAuthenticated === true) {
                return <Fragment>
                    <PortfolioSubnav
                      subnavEntries={getSubnavOfInteraction(authenticationData.isAuthenticated)}                    
                    />
                    <AuthenticationDashboard
                      authenticatedUserEmail={authenticationData.authenticatedUserEmail}
                    />
                  </Fragment>;
              }
              else if (authenticationData.isAuthenticated === false) {
                return <Redirect to="/interaction/sign-in" />;
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
