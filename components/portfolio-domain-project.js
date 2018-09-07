import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/portfolio-domain-project.scss';
import '../styles/portfolio-fullscreen.scss';

import IconButton from '../../reusable-components/icon-button';
import PortfolioDomainProjectDetails from './portfolio-domain-project-details';

class PortfolioDomainProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      component: null,
      fullScreen: false,
      tabSelected: 'implementation',
    };
    this.toggleFullScreen = this.toggleFullScreen.bind(this);
  }

  componentDidMount() {
    const { domain, projectData } = this.props;
    const { route, title } = projectData;
    const { component } = this.state;

    /* lazy loading of project components, for now, without dynamic path components
        option to use context later
        import(`../projects/${domain}/components/${route}))
        https://webpack.github.io/docs/context.html#dynamic-requires */
    if (domain === 'frontend') {
      switch(route) {
        case 'recipe-box':
          import('../../projects/recipe-box/components/recipe-box')
            .then((component) => this.handleComponentLoaded(component));
          break;
        case 'simon-game':
          import('../../projects/simon-game/components/simon-game')
            .then((component) => this.handleComponentLoaded(component));
          break;
        case 'tic-tac-toe':
          import('../../projects/tic-tac-toe/components/t3-game')
            .then((component) => this.handleComponentLoaded(component));
          break;
        case 'wikipedia-viewer':
          import('../../projects/wikipedia-viewer/components/wikipedia-viewer')
            .then((component) => this.handleComponentLoaded(component));
          break;
        case 'life':
          import('../../projects/life/components/life-game')
            .then((component) => this.handleComponentLoaded(component));
            break;
        case 'markdown-previewer':
          import('../../projects/markdown-previewer/components/markdown-previewer')
            .then((component) => this.handleComponentLoaded(component));
            break;
        case 'leaderboard':
          import('../../projects/leaderboard/components/leaderboard')
            .then((component) => this.handleComponentLoaded(component));
            break;
        default:
          break;
      }
    }
    else if (domain === 'd3') {
      switch(route) {
        case 'bar-chart':
          import('../../projects/bar-chart/components/us-gdp-chart')
            .then((component) => this.handleComponentLoaded(component));
            break;
        case 'heat-map':
          import('../../projects/heat-map/components/heat-map')
            .then((component) => this.handleComponentLoaded(component));
            break;
        case 'force-graph':
          import('../../projects/force-graph/components/national-contiguity-graph')
            .then((component) => this.handleComponentLoaded(component));
            break;
        case 'meteorite-map':
          import('../../projects/meteorite-map/components/meteorite-map')
            .then((component) => this.handleComponentLoaded(component));
            break;
          default:
            break;
      }
    }
    else if (domain === 'backend') {
      switch(route) {
        case 'voting':
          import('../../projects/voting/components/voting')
            .then((component) => this.handleComponentLoaded(component));
            break;
        default:
            break;
      }
    }
  }

  handleComponentLoaded(component) {
    this.setState({
      loaded: true,
      component: component.default
    });
  }

  toggleFullScreen() {
    const { fullScreen } = this.state;
    if (fullScreen) {
      document.querySelector('body').className = '';
      this.setState({ fullScreen: false });
    }
    else {
      document.querySelector('body').className = 'fullScreen';
      this.setState({ fullScreen: true });

    }
  }

  render() {
    const { description, lessonsLearned, links, route, statement, technologies, title, userStories } = this.props.projectData;
    const { component: Component, fullScreen } = this.state;

    return (
      <div className="portfolio-domain-project grid-container grid-container-padded">
        <div className="grid-x">
          <ul className="menu horizontal cell">
            <li className={this.state.tabSelected === 'implementation' ? "active" : null}>
              <a onClick={() => this.setState({ tabSelected: 'implementation' })}>Implementation</a>
            </li>
            <li className={this.state.tabSelected === 'details' ? "active" : null}>
              <a onClick={() => this.setState({ tabSelected: 'details' })}>Details</a>
            </li>
          </ul>
          <div className="callout cell">
            <button onClick={this.toggleFullScreen} className="close-button" type="button" title={fullScreen ? 'Leave Solo Project View' : 'View Solo Project In FullScreen'}>
              <FontAwesomeIcon icon={fullScreen ? 'compress' : 'expand'} />
            </button>
            {(this.state.tabSelected === 'implementation' && this.state.loaded === true) && <Component />}
            {(this.state.tabSelected === 'implementation' && this.state.loaded === false) && <p className="text-center"><b><FontAwesomeIcon icon="spinner" spin /> Loading {title} Project</b></p>}
            {this.state.tabSelected === 'details' && <PortfolioDomainProjectDetails
              links={links}
              title={title}
              userStories={userStories}
            />}
          </div>
          {fullScreen && <div className="cell text-center" style={{marginTop: 15}}>
            <IconButton
              faIcon="compress"
              foundationClass="secondary"
              onClick={this.toggleFullScreen}
              text="Leave Solo Project View"
            />
          </div>}
        </div>
      </div>
    );
  }
}

export default PortfolioDomainProject;
