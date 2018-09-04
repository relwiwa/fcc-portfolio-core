import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import AuthenticationForm from './authentication-form';

import { authenticationFormPhase } from '../../../config/application-vocab';
const  { ERROR, INPUT_DATA, SEND_DATA, SUCCESSFUL_TRANSFER } = authenticationFormPhase;

const statusMessages = {};
statusMessages[INPUT_DATA] = 'Sign up below to dive even deeper into the full-stack applications I did!';
statusMessages[SEND_DATA] = <Fragment><FontAwesomeIcon icon="spinner" spin /> Sending your sign up data to the server.</Fragment>;
statusMessages[SUCCESSFUL_TRANSFER] = <Fragment>Sign up was successful. Please proceed to <Link to="/sign-in">sign in</Link>.</Fragment>;
statusMessages[ERROR] = 'An error happened. Sign up was not successful.';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      phase: INPUT_DATA,
    }
    this.handleSubmitSignUpData = this.handleSubmitSignUpData.bind(this);
  }

  handleSubmitSignUpData() {
    const { email, password } = this.state;

    this.setState({
      phase: SEND_DATA,
    });
    axios.post('http://localhost:3000/user/sign-up', {
      email,
      password,
    })
    .then(response => {
      this.setState({
        phase: SUCCESSFUL_TRANSFER,
      });
    })
    .catch(error => {
      this.setState({
        password: '',
        phase: ERROR,
      });
    });
  }

  render() {
    const { email, password, phase } = this.state;
    const { authenticatedUserEmail, isAuthenticated, onSignOut } = this.props;

    return <AuthenticationForm
      authenticatedUserEmail={authenticatedUserEmail}
      className="sign-up"
      email={email}
      faIcon="user-plus"
      headline="Sign Up"
      isAuthenticated={isAuthenticated}
      onChangeInputDatum={(datum) => this.setState(datum)}
      onSignOut={onSignOut}
      onSubmitSignInData={this.handleSubmitSignUpData}
      password={password}
      statusMessage={statusMessages[phase]}
    />;
  }
}

SignUp.propTypes = {
  authenticatedUserEmail: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired,
  onSignOut: PropTypes.func.isRequired,
};

export default SignUp;
