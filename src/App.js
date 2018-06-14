import React, { Component } from 'react';
// import logo from './logo.svg';
import Surveys from './Components/Surveys';
import AddSurvey from './Components/AddSurvey';
import SurveyItem from './Components/SurveyItem';
import Notifications from './Components/Notifications';
import AddNotification from './Components/AddNotification';
import NotificationItem from './Components/NotificationItem';
import './App.css';
import Amplify from 'aws-amplify';
import { API } from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(aws_exports);

 var print_survey = function(){
    console.log('Survey inputs are...id: ' )//+ this.id + ' survey: ' + this.survey + ' category: ' + this.categories + ' widget: ' + this.widgets )
  }

class App extends Component {
  state = { survey: [], categories: {data: []}, widgets: {data:[]}, notification: [], userIds: {data: []}, surveyIds: {data: []} };
  
  async componentDidMount() {
    let survey = await API.get('surveysCRUD', `/surveys`);
    let categories = await API.get('surveysCRUD', `/surveys/categories`);
    let widgets = await API.get('surveysCRUD', `/surveys/widgets`);
    let notification = await API.get('notifyCRUD', `/notify`);
    let users = await API.get('users', `/users`);
    console.log(users)
    //let userId = await API.get('notifyCRUD', `/surveys/`);
    let surveyIds = {data: []};
    Object.keys(survey).map(e => {
      surveyIds.data.push(`${survey[e].id}`);
    })
    console.log(surveyIds);
    console.log(categories);
    this.setState({ survey, categories, widgets, notification, surveyIds});
  }

  async handleDeleteSurvey(id){
    const path = '/surveys/object/' + id;
    try {
      const apiResponse = await API.del('surveysCRUD', path );
      console.log('response from deleting survey: ' + apiResponse);
      this.setState({apiResponse});
    } catch (e) {
      console.log(e);
    }
    let survey = this.state.survey;
    console.log(survey);
    console.log(id)
    let index = survey.findIndex(function(x){
      return x.id === id
    });
    console.log(index)
    console.log(id)
    survey.splice(index, 1);
    this.setState({survey:survey})
  }

  async handleDeleteNotification(id){
    const path = '/notify/object/' + id;
    try {
      const apiResponse = await API.del('notifyCRUD', path );
      console.log('response from deleting notify: ' + apiResponse);
      this.setState({apiResponse});
    } catch (e) {
      console.log(e);
    }
    let notification = this.state.notification;
    console.log(notification);
    console.log(id)
    let index = notification.findIndex(function(x){
      return x.id === id
    });
    console.log(index)
    console.log(id)
    notification.splice(index, 1);
    this.setState({notification:notification})
  }


  async handleUpdateSurvey(survey){
    const path = '/surveys';
    try {
      const apiUpdate = await API.put('surveysCRUD', path, { body: survey });
      console.log('response from updating survey: ' + apiUpdate);

    } catch (e) {
      console.log(e);
    }
  }

  async handleUpdateNotification(notification){
    const path = '/notify';
    try {
      const apiUpdate = await API.put('notifyCRUD', path, { body: notification });
      console.log('response from updating notification: ' + apiUpdate);

    } catch (e) {
      console.log(e);
    }
  }

  async handleAddSurvey(newSurvey){
    let survey = this.state.survey;
    await API.post('surveysCRUD', '/surveys', { body: newSurvey });
    survey.push(newSurvey);
    this.setState({ survey }); 
  }

  async handleAddNotification(newNotification){
    let notification = this.state.notification;
    await API.post('notifyCRUD', '/notify', { body: newNotification });
    notification.push(newNotification);
    this.setState({ notification }); 
  }

  render() {
    console.log(this.state)

    return (
      <div className="App">
      <ul>
      
      <AddNotification notifications={this.state.notification} surveys={this.state.survey} surveyId={this.state.surveyIds} addNotification={this.handleAddNotification.bind(this)}/>
      <Notifications notifications={this.state.notification} surveys={this.state.survey} surveyIds={this.state.surveyIds} onDelete={this.handleDeleteNotification.bind(this)} onUpdate={this.handleUpdateNotification.bind(this)}/>
      <NotificationItem notifications={this.state.notification} surveys={this.state.survey} surveyId={this.state.surveyIds} onDelete={this.handleDeleteNotification.bind(this)} onUpdate={this.handleUpdateNotification.bind(this)}/>
      </ul>
      <ul>
      <AddSurvey surveys={this.state.survey} category={this.state.categories} widget={this.state.widgets} addSurvey={this.handleAddSurvey.bind(this)}/>

      <div className="ExistingSurveys">
      <Surveys surveys={this.state.survey} categories={this.state.categories} widgets={this.state.widgets}  onDelete={this.handleDeleteSurvey.bind(this)} onUpdate={this.handleUpdateSurvey.bind(this)}/>
      </div>
      </ul>
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
