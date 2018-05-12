import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CardImageWithFigCaption from '../../reusable-components/card-image-with-fig-caption';
import PortfolioCard from '../../reusable-components/portfolio-card';
import PortfolioSection from '../../reusable-components/portfolio-section';

class PortfolioDomain extends Component {

  render() {
    const { domainData } = this.props;
    const { description, projects, route, title } = domainData;

    return <div className="portfolio-projects grid-container grid-container-padded" id="portfolio-projects">
      <PortfolioSection
        subTitle={title}
        title="Projects"
      >
        {description.split('.').map((item) => <p key={item.substr(0, 5)}>{item}</p>)}
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
                    imageUrl={project.screenshot}
                  />
                </Link>
              </PortfolioCard>;
            }
          })}
        </div>
      </PortfolioSection>
    </div>;
  }
}

export default PortfolioDomain;
