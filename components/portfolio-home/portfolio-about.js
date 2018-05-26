import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import React from 'react';

import CardImageWithFigCaption from '../../../reusable-components/card-image-with-fig-caption';
import PortfolioCard from '../../../reusable-components/portfolio-card';
import PortfolioSection from '../../../reusable-components/portfolio-section';

const PortfolioAbout = ({ aboutData }) => {

  const renderAboutSection = (section) => {
    const { title, description, image } = section;

    return(
      <PortfolioCard
        key={title}
        cardText={description}
      >
        <CardImageWithFigCaption
          figCaption={title}
          imageUrl={image.url}
        />
      </PortfolioCard>
    );     
  };

  return <div className="portfolio-about grid-container grid-container-padded" id="portfolio-about">
    <PortfolioSection
      subTitle={<FontAwesomeIcon icon={['fab', 'free-code-camp']} />}
      title="freeCodeCamper Walter"
    >
      <div className="grid-x grid-margin-x grid-margin-y medium-up-2 align-stretch">
        {aboutData['sections'].map((section) => renderAboutSection(section))}
      </div>
    </PortfolioSection>
  </div>;
};

export default PortfolioAbout;
