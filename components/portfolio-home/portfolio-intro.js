import React from 'react';
import { Link } from 'react-router-dom';

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
        <div className="grid-x">
          <div className="cell text-center">
            <h2>Welcome To My Interactive Portfolio!</h2>
            {/*<p className="lead">I am both a Flight Attendant and a Full-Stack Developer with a Computer Science Minor</p>*/}
            {/*<p className="lead">I'm about to get my feet back on the ground by becoming a Full-Stack Developer</p>*/}
            <p className="lead">It features live versions of the <Link to='/frontend-projects' title="Go to Frontend Projects">React Frontend</Link> and <Link to='/d3-projects' title="Go to D3 Projects">D3 Projects</Link> I've been building as part of FreeCodeCamp's Certification</p>
            <p className="lead">I am both a Flight Attendant and a Javascript Developer with a Computer Science Degree</p>
            <p className="lead">You can find out more <Link to="/about" title="Go to About section">About Me</Link> and how to <Link to="/contact" title="Go to Contact section">Contact Me</Link></p>
          </div>
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
