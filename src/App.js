import React, { Component } from 'react';
import logo from './logo.svg';
import Surveys from './Components/Surveys';
import './App.css';
import Amplify from 'aws-amplify';
import { API } from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(aws_exports);

class App extends Component {
  state = { survey: [] };
  async componentDidMount() {
    let survey = await API.get('surveysCRUD', `/surveys`);
    
    this.setState({ survey });
  }

  handleDeleteSurvey(id){
    let survey = this.state.survey;
    let index = survey.findIndex(x => id === id);
    survey.splice(index, 1);
    this.setState({survey:survey});
  }

  render() {
    console.log(this.state)
    let surveys = this.state.survey.map(({id, question}) => {
      return <li key={id}>{question}</li>;
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
          <Surveys surveys={this.state.survey} onDelete={this.handleDeleteSurvey.bind(this)}/>
        </ul>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default withAuthenticator(App);
//awsmobile cloud-api invoke surveysCRUD POST /surveys '{"body": {"category": "happiness","widgets": "Mood Slider", "id": 1, "question": "Learn more Amplify"}}'
// Adding lambda function code on: 
// /Users/frank.chau/Sites/my-app/awsmobilejs/backend/cloud-api/Surveys/
// ...
// Path to be used on API for get and remove an object should be like:
// /Surveys/object/:id

// Path to be used on API for list objects on get method should be like:
// /Surveys

// JSON to be used as data on put request should be like:
// {
//   "category": "INSERT VALUE HERE",
//   "widgets": "INSERT VALUE HERE",
//   "question": "INSERT VALUE HERE",
//   "id": "INSERT VALUE HERE"
// }
// To test the api from the command line (after awsmobile push) use this commands
// awsmobile cloud-api invoke SurveysCRUD <method> <path> [init]

// Adding lambda function code on: 
// /Users/frank.chau/Sites/my-app/awsmobilejs/backend/cloud-api/surveys/
// ...
// Path to be used on API for get and remove an object should be like:
// /surveys/object/:id

// Path to be used on API for list objects on get method should be like:
// /surveys/:id

// JSON to be used as data on put request should be like:
// {
//   "category": "INSERT VALUE HERE",
//   "question": "INSERT VALUE HERE",
//   "widget": "INSERT VALUE HERE",
//   "id": "INSERT VALUE HERE"
// }
// To test the api from the command line (after awsmobile push) use this commands
// awsmobile cloud-api invoke surveysCRUD <method> <path> [init]
