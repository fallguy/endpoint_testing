import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import { API } from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(aws_exports);

class NotificationEngineApp extends Component {
  
  async doIt(){
   console.log("Swirly head of death"); 
   try {
     const apiCall = await API.get('notificationEngine', `/notificationEngine`);
   } catch (e) {
     console.log(e);
   }
  }

  render() {

    return (
      <div className="App">
       <button className="notificationEngine endpoint" onClick={this.doIt.bind(this)}>
         DO IT 
       </button>
      </div>
    );
  }
}

export default NotificationEngineApp;
