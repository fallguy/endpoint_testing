import React, { Component } from 'react';
// import logo from './logo.svg';
import Notifications from './Components/Notifications/Notifications';
import AddNotification from './Components/Notifications/AddNotification';
import './App.css';
import Amplify from 'aws-amplify';
import { API } from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(aws_exports);

 var print_survey = function(){
    console.log('Survey inputs are...id: ' )//+ this.id + ' survey: ' + this.survey + ' category: ' + this.categories + ' widget: ' + this.widgets )
  }

class NotificationApp extends Component {
  state = { survey: [], categories: {data: []}, widgets: {data:[]}, notification: [], users: [] };
  
  async componentDidMount() {
    let survey = await API.get('surveysCRUD', `/surveys`);
    let categories = await API.get('surveysCRUD', `/surveys/categories`);
    let widgets = await API.get('surveysCRUD', `/surveys/widgets`);
    let notification = await API.get('notifyCRUD', `/notify`);
    let users = await API.get('usersCRUD', `/users`);
    console.log(users)
    console.log(survey)
    //let userId = await API.get('notifyCRUD', `/surveys/`);
    //let surveyIds = {data: []};
    //Object.keys(survey).map(e => {
    //  surveyIds.data.push(`${survey[e].id}`);
    //})
    this.setState({ survey, categories, widgets, notification, users});
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
    let index = notification.findIndex(function(x){
      return x.id === id
    });
    notification.splice(index, 1);
    this.setState({notification:notification})
  }

  async handleUpdateNotification(notification){
    let userId = ' ';
    notification.userId = userId;
    const path = '/notify';
    try {
      const apiUpdate = await API.put('notifyCRUD', path, { body: notification });
      console.log('response from updating notification: ' + apiUpdate);

    } catch (e) {
      console.log(e);
    }
  }

  async handleAddNotification(newNotification){
    let notification = this.state.notification;
    await API.post('notifyCRUD', '/notify', { body: newNotification });
    notification.push(newNotification);
    this.setState({ notification }); 
  }

  render() {

    return (
      <div className="App">
        <ul>
          <AddNotification notifications={this.state.notification} surveys={this.state.survey} users={this.state.users} addNotification={this.handleAddNotification.bind(this)}/>
        <div className="ExistingNotifications">
          <Notifications notifications={this.state.notification} surveys={this.state.survey} users={this.state.users} onDelete={this.handleDeleteNotification.bind(this)} onUpdate={this.handleUpdateNotification.bind(this)}/>
        </div>
        </ul>
      </div>
    );
  }
}

export default NotificationApp;
