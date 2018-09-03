import PropTypes from 'prop-types';
import React from 'react';

import PortfolioSection from '../../reusable-components/portfolio-section';

const PortfolioDashboard = ({ authenticatedUserEmail }) => <PortfolioSection
  className="portfolio-dashboard"
  subTitle={authenticatedUserEmail}
  title="Your Dashboard"
>
  <div>Soon, you will have the chance to explore fullstack applications I've done as part of FreeCodeCamp's Backend Certification</div>
</PortfolioSection>;

PortfolioDashboard.propTypes = {
  authenticatedUserEmail: PropTypes.string.isRequired,
};

export default PortfolioDashboard;
