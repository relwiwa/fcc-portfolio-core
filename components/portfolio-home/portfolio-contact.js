import React from 'react';

import PortfolioCard from '../../../reusable-components/portfolio-card';
import PortfolioSection from '../../../reusable-components/portfolio-section';

import '../../styles/portfolio-contact.scss';

const PortfolioContact = (props) => {
  const { contactData } = props;

  const renderContactItem = ({ description, sites, title }) => (
    <PortfolioCard
      cardText={[description]}
    >
      <div className="text-center" style={{background: '#1779ba', padding: '1rem', color: '#fefefe'}}>
          {title}
      </div>
      <div
        className="text-center grid-x grid-padding-x grid-padding-y"
      >
        {sites.map(site => (
          <div key={site.title} className="cell small-6">
            <a href={site.url} title={site.description}>
              <img src={site.image.url} alt={site.description} />
            </a>
          </div>
        ))}
      </div>
    </PortfolioCard>
  );

  return <div className="portfolio-contact grid-container grid-container-padded" id="portfolio-contact">
    <PortfolioSection
      title="Contact"
      subTitle="relwiwa"
    >
      <p>Trace the footprints I've left on the following sites while catching up with the latest technologies:</p>
      <div className="grid-x grid-margin-x grid-margin-y medium-up-3 align-stretch">
        {renderContactItem(contactData['coding'])}
        {renderContactItem(contactData['code'])}
        {renderContactItem(contactData['training'])}
      </div>
    </PortfolioSection>
  </div>;
}

export default PortfolioContact;
