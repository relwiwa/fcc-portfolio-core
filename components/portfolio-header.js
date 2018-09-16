import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthenticationContext } from '../../services/authentication';

import '../styles/portfolio-header.scss';

class PortfolioHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavigation: false
    };
  }

  renderNavLink(item) {
    const { icon, route, title } = item;

    return (
      <li key={title} className="text-center">
        <NavLink
          activeClassName='nav-active-element'
          to={'/' + route}
          title={'Go to ' + title + ' Projects Page'}
        >{<Fragment><FontAwesomeIcon icon={icon} /><br className="show-for-medium-only" /> {title}</Fragment>}</NavLink>
      </li>
    )
  }

  toggleNavigation() {
    this.setState({
      showNavigation: !this.state.showNavigation
    });
  }

  render() {
    const { projectsData } = this.props;

    return (
      <div id="portfolio-top" className="portfolio-header">
        <div className="portfolio-logo grid-x align-bottom">
          <div className="cell medium-2 text-center medium-text-left">
            <NavLink
              exact
              to='/'
            >
              <img src="https://res.cloudinary.com/dqzrtsqol/image/upload/v1495559680/portfolio-page/relwiwa-logo.svg" alt="Logo" /><br />
            </NavLink>
            <NavLink
              exact
              to="/"
            >RELWIWA</NavLink>
          </div>
          {this.state.showNavigation && <div className="cell show-for-small-only">&nbsp;</div>}
          <button
            className="menu-button show-for-small-only"
            aria-label="Toggle Navigation on small screens"
            type="button"
            onClick={() => this.toggleNavigation()}
          >
            <span aria-hidden="true"><FontAwesomeIcon icon="bars" /></span>
          </button>
          <nav className={'cell medium-10' + (!this.state.showNavigation ? ' hide-for-small-only' : '')}>
            <ul className="menu vertical medium-expanded medium-horizontal align-center">
              {projectsData.map((item) => this.renderNavLink(item))}
              <li className="text-center">
                <NavLink
                  activeClassName='nav-active-element'
                  isActive={(match, location) => {
                    return location.pathname.indexOf('/about') >= 0 ? true : false;
                  }}
                  title="Go to About Page"
                  to='/about/free-code-camp-walter'
                ><FontAwesomeIcon icon="info-circle" /><br className="show-for-medium-only" /> About</NavLink>
              </li>
              <AuthenticationContext.Consumer>
                {({ isAuthenticated }) => <li className="text-center">
                  {isAuthenticated !== null && <NavLink
                    activeClassName='nav-active-element'
                    isActive={(match, location) => {
                      return location.pathname.indexOf('/interaction') >= 0 ? true : false;
                    }}  
                    title="Go to Interaction Section"
                    to={isAuthenticated === true ? '/interaction/dashboard' : '/interaction/sign-in'}
                  ><FontAwesomeIcon icon="user" /><br className="show-for-medium-only" /> Interaction</NavLink>}
                </li>}
                </AuthenticationContext.Consumer>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default PortfolioHeader;
