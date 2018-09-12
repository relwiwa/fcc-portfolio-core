import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import AuthenticationForm from './authentication-form';
import IconLink from '../../../reusable-components/icon-link';

import { authenticationFormPhase } from '../../../config/application-vocab';
const  { ERROR, INPUT_DATA, SEND_DATA, WRONG_CREDENTIALS } = authenticationFormPhase;

const statusMessages = {};
statusMessages[INPUT_DATA] = 'Sign in below to dive even deeper into the full-stack applications I did!';
statusMessages[SEND_DATA] = <Fragment><FontAwesomeIcon icon="spinner" spin /> Sending your sign in data to the server.</Fragment>;
statusMessages[ERROR] = 'An error happened. Sign in was not successful.';
statusMessages[WRONG_CREDENTIALS] = 'Your email and/or password were not correct. Sign in was not successful.';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      phase: INPUT_DATA,
    }
    this.handleSubmitSignInData = this.handleSubmitSignInData.bind(this);
  }

  handleSubmitSignInData() {
    const { onSuccessfulSignIn } = this.props;
    const { email, password } = this.state;

    this.setState({
      phase: SEND_DATA,
    });
    axios.post('http://localhost:3000/user/sign-in', {
      email,
      password,
    })
    .then(
      response => {
        onSuccessfulSignIn(response.data.userJwt, email);
      },
      error => {
        if (error.message === 'Request failed with status code 401') {
          this.setState({
            password: '',
            phase: WRONG_CREDENTIALS,
          });  
        }
        else {
          this.setState({
            password: '',
            phase: ERROR,
          });
        }
      }
    );
  }

  render() {
    const { email, password, phase } = this.state;
    const { authenticatedUserEmail, isAuthenticated, location, onSignOut } = this.props;
    let statusMessage = statusMessages[phase];
    if (phase === INPUT_DATA && location.state && location.state.project) {
      statusMessage = `Sign in below to dive even deeper into ${location.state.project} and all the other full-stack applications I did`;
    }
    if (phase === INPUT_DATA) {
      statusMessage = <Fragment>{statusMessage}. If you do not have an account yet, it is time to <IconLink
        link={location.state && location.state.project ? {
          pathname: '/sign-up',
          state: {
            from: location.state.from,
            project: location.state.project,
          },
        } : "/sign-up"}
        text="sign up"
        icon="user-plus"
      /></Fragment>;
    }

    return <AuthenticationForm
      authenticatedUserEmail={authenticatedUserEmail}
      className="sign-in"
      email={email}
      faIcon="sign-in-alt"
      headline="Sign In"
      isAuthenticated={isAuthenticated}
      onChangeInputDatum={(datum) => this.setState(datum)}
      onSignOut={onSignOut}
      onSubmitSignInData={this.handleSubmitSignInData}
      password={password}
      statusMessage={statusMessage}
    />;
  }
}

SignIn.propTypes = {
  authenticatedUserEmail: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      signInMessage: PropTypes.string,
    })
  }),
  onSignOut: PropTypes.func.isRequired,
  onSuccessfulSignIn: PropTypes.func.isRequired,
};

export default withRouter(SignIn);
