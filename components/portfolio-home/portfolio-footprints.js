import React from 'react';

import PortfolioCard from '../../../reusable-components/portfolio-card';
import PortfolioSection from '../../../reusable-components/portfolio-section';

import '../../styles/portfolio-footprints.scss';

const PortfolioFootprints = (props) => {
  const { footprintsData } = props;

  const renderFootprintItem = ({ description, sites, title }) => (
    <PortfolioCard
      cardText={[description]}
    >
      <div className="footprint-item text-center">
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

  return <PortfolioSection
    className="portfolio-footprints"
    title="Web Footprints"
    subTitle="relwiwa"
  >
    <p>Trace the footprints I've left on the following sites while catching up with the latest technologies:</p>
    <div className="grid-x grid-margin-x grid-margin-y medium-up-3 align-stretch">
      {renderFootprintItem(footprintsData['coding'])}
      {renderFootprintItem(footprintsData['code'])}
      {renderFootprintItem(footprintsData['training'])}
    </div>
  </PortfolioSection>;
}

export default PortfolioFootprints;
