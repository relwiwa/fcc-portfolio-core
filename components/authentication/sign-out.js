import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import IconButton from '../../../reusable-components/icon-button';
import IconLink from '../../../reusable-components/icon-link';
import ModalDialogue from '../../../reusable-components/modal-dialogue';
import PortfolioSection from '../../../reusable-components/portfolio-section';

class SignOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  render () {
    const { authenticatedUserEmail, onSignOut } = this.props;
    const { showModal } = this.state;

    return <PortfolioSection
      className={'sign-out'}
      subTitle={<FontAwesomeIcon icon="sign-out-alt" />}
      title="Sign Out"
    >
      {showModal && <ModalDialogue
        closeModal={() => this.setState({ showModal: false })}
      >
        <div className="text-center">Are you sure you want to sign out?<br /><br /></div>
        <div className="button-group align-center">
          <IconButton
            faIcon="check"
            foundationClass="primary"
            onClick={onSignOut}
            text="Yes"
          />
          <IconButton
            faIcon="times"
            foundationClass="secondary"
            onClick={() => this.setState({ showModal: false })}
            text="No"
          />
        </div>
      </ModalDialogue>}
      <div>You are logged in as <strong>{authenticatedUserEmail}</strong>.</div>
      <div><br />To <IconLink icon="sign-out-alt" onClick={() => this.setState({ showModal: true })} text="sign out" />, click <IconLink onClick={() => this.setState({ showModal: true })} icon="sign-out-alt" text="here" />.</div>
    </PortfolioSection>;
  }
}

SignOut.propTypes = {
  authenticatedUserEmail: PropTypes.string.isRequired,
  onSignOut: PropTypes.func.isRequired,
};

export default SignOut;
