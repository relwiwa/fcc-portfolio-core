import PropTypes from 'prop-types';
import React from 'react';

import PortfolioSection from '../../../reusable-components/portfolio-section';

const AuthenticationDashboard = ({ authenticatedUserEmail }) => <PortfolioSection
  className="portfolio-dashboard"
  subTitle={authenticatedUserEmail}
  title="Your Dashboard"
>
  <div>Now you can explore the full featureset of the fullstack applications on this website</div>
</PortfolioSection>;

AuthenticationDashboard.propTypes = {
  authenticatedUserEmail: PropTypes.string.isRequired,
};

export default AuthenticationDashboard;
