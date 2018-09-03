import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import AuthenticationForm from './authentication-form';

const INPUT_DATA = 'INPUT_DATA';
const SEND_DATA = 'SEND_DATA';
const ERROR = 'ERROR';
const WRONG_CREDENTIALS = 'WRONG_CREDENTIALS';

const statusMessages = {};
statusMessages[INPUT_DATA] = 'Sign in below to dive even deeper into the full-stack applications I did!';
statusMessages[SEND_DATA] = <Fragment><FontAwesomeIcon icon="spinner" spin /> Sending your signin data to the server.</Fragment>;
statusMessages[ERROR] = 'An error happened. Sign in was not successful.';
statusMessages[WRONG_CREDENTIALS] = 'Your email and/or password war not correct. Sign in was not successful.';

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
    const { email } = this.state;

    this.setState({
      phase: SEND_DATA,
    });
    axios.post('http://localhost:3000/user/signin', {
      email: this.state.email,
      password: this.state.password,
    })
    .then(response => {
      onSuccessfulSignIn(response.data.userJwt, email);
    })
    .catch(error => {
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
    });
  }

  render() {
    const { email, password, phase } = this.state;

    return <AuthenticationForm
      className="signin"
      email={email}
      faIcon="sign-in-alt"
      headline="Sign In"
      onChangeInputDatum={(datum) => this.setState(datum)}
      onSubmitSignInData={this.handleSubmitSignInData}
      password={password}
      statusMessage={statusMessages[phase]}
    />;
  }
}

SignIn.propTypes = {
  onSuccessfulSignIn: PropTypes.func.isRequired,
};

export default SignIn;
