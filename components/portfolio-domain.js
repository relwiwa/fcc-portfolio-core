import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CardImageWithFigCaption from '../../reusable-components/card-image-with-fig-caption';
import PortfolioCard from '../../reusable-components/portfolio-card';
import PortfolioSection from '../../reusable-components/portfolio-section';

class PortfolioDomain extends Component {

  render() {
    const { domainData } = this.props;
    const { projects, route, title } = domainData;

    return <PortfolioSection
      className="portfolio-projects"
      subTitle={title}
      title="Projects"
    >
      <div className="grid-x align-stretch medium-up-2 large-up-3 grid-margin-x grid-margin-y">
        {projects.map((project) => {
          if (!project.externalOnly) {
            const link = '/' + route + '/' + project.route;
            return <PortfolioCard
              key={project.title}
              cardText={[project.information]}
              link={link}
            >
              <Link
                title={'Check out the ' + project.title + ' Project'}
                to={link}
              >
                <CardImageWithFigCaption
                  figCaption={project.title}
                  imageUrl={project.screenshot.blue}
                />
              </Link>
            </PortfolioCard>;
          }
        })}
      </div>
    </PortfolioSection>;
  }
}

export default PortfolioDomain;
