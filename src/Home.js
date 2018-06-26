import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import { API, Auth } from 'aws-amplify';
// import SignUp from './Auth/SignUp'
import SignIn from './Auth/SignIn'
import VerifyContact from './Auth/Verify'
import ConfirmSignIn from './Auth/ConfirmSignIn'
import ConfirmSignUp from './Auth/ConfirmSignUp'
import aws_exports from './aws-exports';
import { Link } from 'react-router-dom';
import { SignUp, ForgotPassword, withAuthenticator } from 'aws-amplify-react';
import { Authenticator } from 'aws-amplify-react'; 

Amplify.configure(aws_exports);


class Home extends Component {

  async postUser (user){
    await API.post('usersCRUD', '/users', { body: user });
  }

  render() {
    let userObj = {}
    let session = Auth.currentCredentials().then((data) => {
      console.log(data)
      
      userObj.identityid = data.data.IdentityId;
      Auth.currentSession().then((user) =>{
        console.log(user);
        userObj.email = user.idToken.payload.email;
        userObj.phone = user.idToken.payload.phone_number;
        this.postUser(userObj);
        
      })
    });
   
    return (
      <div className="Home">
        <Link to="/notifications">Notifications</Link>
        <Link to="/surveys">Surveys</Link>
        <Link to="/notification-engine">Notification Engine</Link>
      </div>
    );
  }
}

export default withAuthenticator(Home, false, [
  <SignIn/>,
  <ConfirmSignIn/>,
  <VerifyContact/>,
  <SignUp/>,
  <ConfirmSignUp/>,
  <ForgotPassword/>
]);
