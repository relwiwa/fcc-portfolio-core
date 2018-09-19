import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

const AuthenticationFormInput = ({ faIcon, type, name, onChangeInputDatum, placeholder, value, valid, helpText }) => (
  <div className="cell">
    <div className="input-group">
      <span className="input-group-label"><FontAwesomeIcon icon={faIcon} /></span>
        <input
          className="input-group-field"
          type={type}
          onChange={(event) => {
            const inputValue = {};
            inputValue[name] = event.target.value;
            onChangeInputDatum(inputValue);
          }}
          placeholder={placeholder}
          value={value}
        />
    </div>
    <p className="help-text"><FontAwesomeIcon icon={['far', valid ? 'check-square' : 'square']} /> {helpText}</p>
  </div>
);

AuthenticationFormInput.propTypes = {
  faIcon: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChangeInputDatum: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  valid: PropTypes.bool.isRequired,
  helpText: PropTypes.string.isRequired,
};

export default AuthenticationFormInput;
