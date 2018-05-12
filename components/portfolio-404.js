import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio404 = (props) => (
  <div className="portfolio-404 grid-container grid-container-padded" id="portfolio-404">
    <div className="grid-x grid-padding-x">
      <div className="cell callout">
        <h1>Not Found <small>404</small></h1>
        <p>No such page on this website</p>
        <p>Go to <Link to="/">Home Page</Link></p>
      </div>
    </div>
  </div>
);

export default Portfolio404;
