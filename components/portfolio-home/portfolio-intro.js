import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import React from 'react';

import IconLink from '../../../reusable-components/icon-link';

import '../../styles/portfolio-intro.scss';

const PortfolioIntro = (props) => {
  const { introData } = props;

  const shuffleTechnologyIcons = (icons) => {
    let inputIcons = [...icons];
    let outputIcons = [];
    while (outputIcons.length < 8) {
      const position = Math.floor(Math.random() * inputIcons.length);
      outputIcons.push(inputIcons[position]);
      let x = inputIcons.slice(0, position);
      x = x.concat(inputIcons.slice(position + 1));
      inputIcons = x;
    }
    return outputIcons;
  }

  const renderTechnologyIcon = (item, index) => {
    const { image, title } = item;

    return (
      <div
        className={'cell text-center' + (index >= 6 ? ' hide-for-small-only' : '')}
        key={title}
      >
        <img src={image.url} alt={title} title={title} />
      </div>
    );
  };

  return (
    <div className="portfolio-intro" id="portfolio-intro">
      <div className="callout secondary">
        <div className="grid-container">
        <div className="grid-x">
          <div className="cell text-center">
            <h2>Interactive <FontAwesomeIcon icon={['fab', 'free-code-camp']} /> FreeCodeCamp <FontAwesomeIcon icon={['fab', 'react']} pulse /> Portfolio</h2>
            <hr />
            {/*<p className="lead">I am both a Flight Attendant and a Full-Stack Developer with a Computer Science Minor</p>*/}
            {/*<p className="lead">I'm about to get my feet back on the ground by becoming a Full-Stack Developer</p>*/}
            <p className="lead">Come, explore all the projects I've built as part of <IconLink link="about" icon={['fab', 'free-code-camp']} text="FreeCodeCamp's Certification" />.</p>
            <p className="lead">There are <IconLink link="frontend-projects" icon="mobile-alt" text="Frontend Projects" /> and <IconLink link="d3-projects" icon="chart-line" text="Data Viz Projects" />.</p>
            <p className="lead">They are all responsive. They are all pure React. They all demonstrate React's composite component architecture.</p>
            <p className="lead">Dive in, explore the beauty, and fall in <FontAwesomeIcon icon="heart" /> with React, just like this developer did!</p>
{/*             <p className="lead">Can you remember the full sequence of a <Link style={{textDecoration: 'none'}} to="frontend-projects/simon-game"><FontAwesomeIcon icon="music" /> <span style={{textDecoration: 'underline'}}>Simon Game</span></Link>? Or beat the AI in <Link style={{textDecoration: 'none'}} to="frontend-projects/tic-tac-toe"><FontAwesomeIcon icon="cubes" /> <span style={{textDecoration: 'underline'}}>Tic Tac Toe</span></Link>?</p>
            <p className="lead">Checkout Conway's <Link style={{textDecoration: 'none'}} to="frontend-projects/life"><FontAwesomeIcon icon="server" /> <span style={{textDecoration: 'underline'}}>Life Automaton</span></Link>, all documented <Link style={{textDecoration: 'none'}} to="d3-projects/meteorite-map"><FontAwesomeIcon icon="globe" /> <span style={{textDecoration: 'underline'}}>Meteorite Strikes</span></Link>, and many more!</p>
 */}{/*             <p className="lead">It is also the story of leaving behind Vanilla Javascript as well as Angular, and falling in love with React.</p>
            <p>There's It features live versions of the <Link to='/frontend-projects' title="Go to Frontend Projects">React Frontend</Link> and <Link to='/d3-projects' title="Go to D3 Projects">D3 Projects</Link> I've been building as part of FreeCodeCamp's Certification</p>
            <p className="lead">I am both a Flight Attendant and a Javascript Developer with a Computer Science Degree</p>
            <p className="lead">You can find out more <Link to="/about" title="Go to About section">About Me</Link> and how to <Link to="/contact" title="Go to Contact section">Contact Me</Link></p>
 */}
          </div>
        </div>
        </div>
        <div className="grid-x">
          <div className="technologies-container cell">
            <div className="grid-x grid-margin-x grid-margin-y small-up-3 medium-up-8 large-up-8">
              {shuffleTechnologyIcons(introData['technologyIcons']).map((item, index) => renderTechnologyIcon(item, index))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioIntro;
