import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import AuthenticationFormInput from './authentication-form-input';
import IconButton from '../../../reusable-components/icon-button';
import IconLink from '../../../reusable-components/icon-link';
import PortfolioSection from '../../../reusable-components/portfolio-section';

const AuthenticationForm = ({ authenticatedUserEmail, className, email, faIcon, headline, onChangeInputDatum, onSubmitSignInData, password, statusMessage }) => {
  const validateInput = (inputValue, minLength, pattern) => {
    let isValid = true;
    if (inputValue.length < minLength) {
      isValid = false;
    }
    if (!pattern.test(inputValue)) {
      isValid = false;
    }
    return isValid;
  }
  const emailIsValid = validateInput(email, 5, /^[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.][a-zA-Z]+$/);
  const passwordIsValid = validateInput(password, 8, /[0-9]+/);

  return <PortfolioSection
    className={className}
    subTitle={<FontAwesomeIcon icon={faIcon} />}
    title={headline}
  >
    <Fragment>
      <p>{statusMessage}</p>
      <div className="grid-x">
        <AuthenticationFormInput
          faIcon="at"
          helpText="Please enter a valid email address"
          name="email"
          onChangeInputDatum={onChangeInputDatum}
          placeholder="Email"
          type="text"
          valid={emailIsValid}
          value={email}
        />
        <AuthenticationFormInput
          faIcon="key"
          helpText="Please enter a password with at least 8 characters, including at least one number"
          name="password"
          onChangeInputDatum={onChangeInputDatum}
          placeholder="Password"
          type="password"
          valid={passwordIsValid}
          value={password}
        />
        <div className="cell">
          <IconButton
            faIcon={faIcon}
            foundationClass={(emailIsValid && passwordIsValid ? '' : 'disabled ') + 'primary'}
            onClick={(emailIsValid && passwordIsValid ? onSubmitSignInData : null)}
            tabIndex="0"
            text={headline}
          />
        </div>
      </div>
    </Fragment>
  </PortfolioSection>;
};

AuthenticationForm.propTypes = {
  authenticatedUserEmail: PropTypes.string,
  className: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  faIcon: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  onChangeInputDatum: PropTypes.func.isRequired,
  onSubmitSignInData: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  statusMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default AuthenticationForm;
