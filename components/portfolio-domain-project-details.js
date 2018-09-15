import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const PortfolioDomainProjectDetails = (props) => {
  const { links, title, userStories } = props;

  const renderUserStory = (userStory, index) => {
    return <li key={userStory.icon}><FontAwesomeIcon icon={userStory.icon} listItem /> {userStory.description}</li>;
  };

  return (
    <div className="portfolio-domain-project-details grid-x grid-padding-x">
      <h3 className="cell">User Stories <small>{title}</small></h3>
      <p className="cell">The {title} project was implemented based on these user stories stated by FreeCodeCamp:</p>
      <div className="cell medium-6">
        <ul className="fa-ul">
          {userStories.map((userStory, index) => {
            return index % 2 === 0 ? renderUserStory(userStory) : null
          })}
        </ul>
      </div>
      <div className="cell medium-6">
        <ul className="fa-ul">
          {userStories.map((userStory, index) => {
            return index % 2 !== 0 ? renderUserStory(userStory) : null
          })}
       </ul>
      </div>
      <div className="cell medium-6">
        <h3>Standalone Deployments</h3>
        <p>All individual projects are React components that work as part of the bigger Portfolio Project, and on their own. Below are deployments of the standalone versions:</p> 
        <ul className="fa-ul">
          {links['github.io'] && <li><a href={links['github.io']} target="blank" title="Standalone deployment on Github Pages"><FontAwesomeIcon icon={['fab', 'github-alt']} listItem /> Github Pages</a></li>}
          {links['codepen'] && <li><a href={links['codepen']} target="blank" title="Standalone deployment on Codepen"><FontAwesomeIcon icon={['fab', 'codepen']} listItem /> Codepen</a></li>}
        </ul>
      </div>
      <div className="cell medium-6">
        <h3>More Resources</h3>
        <ul className="fa-ul">
          <li><a href={links['github']} target="blank" title={'Github Repository of ' + title + ' project'}><FontAwesomeIcon icon={['fab', 'github']} listItem /> Github Repository</a></li>
          <li><a href={links['freecodecamp']} target="blank" title="FreeCodeCamp Project Page"><FontAwesomeIcon icon={['fab', 'free-code-camp']} listItem /> FreeCodeCamp Project Page</a></li>
        </ul>
      </div>

    </div>
  );
};

export default PortfolioDomainProjectDetails;
