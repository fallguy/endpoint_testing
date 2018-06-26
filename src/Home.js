import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import { API } from 'aws-amplify';
import aws_exports from './aws-exports';
import { Link } from 'react-router-dom';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(aws_exports);


class Home extends Component {

  render() {

    return (
      <div className="Home">
        <Link to="/notifications">Notifications</Link>
        <Link to="/surveys">Surveys</Link>
        <Link to="/notification-engine">Notification Engine</Link>
      </div>
    );
  }
}

export default withAuthenticator(Home);
