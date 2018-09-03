import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import PortfolioFooter from './portfolio-footer';
import PortfolioHeader from './portfolio-header';
import PortfolioMain from './portfolio-main';

import portfolioData from '../data/portfolio';
import { getAuthenticationData, saveAuthDataToLocalStorage } from '../../services/authentication';
import '../styles/portfolio.scss';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticationData: getAuthenticationData(),
    };
    this.handleSuccessfulSignIn = this.handleSuccessfulSignIn.bind(this);
  }

  handleSuccessfulSignIn(jwtToken, userEmail) {
    saveAuthDataToLocalStorage(jwtToken, userEmail);
    this.setState({
      authenticationData: getAuthenticationData(),
    });
    this.props.history.push('/dashboard');
  }

  render() {
    const { authenticationData: { authenticatedUserEmail, isAuthenticated } } = this.state;

    return <div className="portfolio">
      <PortfolioHeader
        isAuthenticated={isAuthenticated}
        projectsData={portfolioData['domains']}
      />
      <PortfolioMain
        authenticatedUserEmail={authenticatedUserEmail}
        isAuthenticated={isAuthenticated}
        onSuccessfulSignIn={this.handleSuccessfulSignIn}
        portfolioData={portfolioData}
      />
      <PortfolioFooter
        contactData={portfolioData['contact']}
        projectsData={portfolioData['domains']}
      />
    </div>;
  }
}

export default withRouter(Portfolio);
