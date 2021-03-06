import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import PortfolioFooter from './portfolio-footer';
import PortfolioHeader from './portfolio-header';
import PortfolioMain from './portfolio-main';

import portfolioData from '../data/portfolio';
import ApiRootContext from '../../config/api-root-context';
import { AuthenticationContext, getAuthenticationData, removeAuthDataFromLocalStorage, saveAuthDataToLocalStorage } from '../../services/authentication';
import '../styles/portfolio.scss';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    /*  values of isAuthenticated:
        - null: not yet determined (or SSR)
        - true
        - false */
    this.state = {
      authenticationData: getAuthenticationData(),
    };
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleSuccessfulSignIn = this.handleSuccessfulSignIn.bind(this);
  }
  
  handleSignOut() {
    removeAuthDataFromLocalStorage();
    this.setState({
      authenticationData: getAuthenticationData(),
    });
    this.props.history.push('/interaction/sign-in');
  }

  handleSuccessfulSignIn(jwtToken, userEmail) {
    const { history, location: { state: routerState } } = this.props;
    saveAuthDataToLocalStorage(jwtToken, userEmail);
    this.setState({
      authenticationData: getAuthenticationData(),
    });
    if (routerState.from) {
      history.push(routerState.from);
    }
    else {
      history.push('/dashboard');
    }
  }

  render() {
    const { authenticationData } = this.state;

    return <AuthenticationContext.Provider value={authenticationData}>
      <ApiRootContext.Provider value="http://localhost:3000/api/">
        <div className="portfolio">
          <PortfolioHeader
            projectsData={portfolioData['domains']}
          />
          <PortfolioMain
            onSignOut={this.handleSignOut}
            onSuccessfulSignIn={this.handleSuccessfulSignIn}
            portfolioData={portfolioData}
          />
          <PortfolioFooter
            footprintsData={portfolioData['footprints']}
            projectsData={portfolioData['domains']}
          />
        </div>
      </ApiRootContext.Provider>
    </AuthenticationContext.Provider>;
  }
}

export default withRouter(Portfolio);
