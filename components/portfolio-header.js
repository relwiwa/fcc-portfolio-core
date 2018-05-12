import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/portfolio-header.scss';

class PortfolioHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavigation: false
    };
  }

  renderNavLink(item) {
    const { route, title } = item;

    return (
      <li key={title}>
        <NavLink
          activeClassName='nav-active-element'
          to={'/' + route}
          title={'Go to ' + title + ' Projects Page'}
        >{title + ' Projects'}</NavLink>
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
          <button
            className="menu-button show-for-small-only"
            aria-label="Toggle Navigation on small screens"
            type="button"
            onClick={() => this.toggleNavigation()}
          >
            <span aria-hidden="true"><i className="fa fa-bars"></i></span>
          </button>
          <nav className={'cell medium-10' + (!this.state.showNavigation ? ' hide-for-small-only' : '')}>
            <ul className="menu vertical medium-expanded medium-horizontal align-center">
              {projectsData.map((item) => this.renderNavLink(item))}
              <li>
                <NavLink
                  activeClassName='nav-active-element'
                  exact
                  to='/about'
                  title="Go to About Page"
                >About</NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName='nav-active-element'
                  exact
                  to='/contact'
                  title="Go to Contact Page"
                >Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default PortfolioHeader;
