import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddNotification extends Component {

  async handleSubmit(e){
    //const { notification } = this.props.notifications;
    const notificationId = this.props.notifications.length + 1;
    //const userId = this.refs.userId.length + 1;
    const surveyId = this.refs.surveyId;
    
    const time = parseInt(this.refs.time.value);
    const newNotification = { "id": notificationId.toString(), "surveyId": surveyId.toString(), "time": parseInt(time)};

    console.log('Submitted: '); //this.notificationId + ' ' + this.userId + ' ' this.surveyId ' ' this.time + ' ');
    if (this.refs.time.value === ''){
      alert('Time is required');
    } else {
      let findSurvey = this.props.surveys.find(u => u.id === this.refs.surveyId.value);
      this.setState({newNotification:{
        id: uuid.v4(),
        user_id: this.refs.users.value,
        survey: findSurvey,
        scheduled_at: parseInt(this.refs.time.value),
      }}, function(){
        // console.log('Submitted: ' + this.props.props);
        this.props.addNotification(this.state.newNotification);
      });
    }
    e.preventDefault();
    this.refs.time.value = '';
    // console.log('Submitted' + this.state.newNotification);
  }
  render() {
    let questionOptions = this.props.surveys.map(survey => {
      return <option key={survey.id} value={survey.id}> {survey.question}</option>
    });
    let users = this.props.users.map(users => {
      return <option key={users.id} value={users.identityid}>{users.email}</option>
    })
    return (
      <div>
        <h3>Add Notification</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Schedule_At</label><br />
            <input type="number" placeholder="1528239669" ref="scheduled_at"/>
          </div>
          <div>
            <label>Question</label><br />
            <select ref="surveyId">
              {questionOptions}
            </select>
          </div>
          <div>
            <label>Name</label><br />
            <select ref="name">
            </select>
          </div>
          <br />
          <div>
            <label>Users</label><br />
            <select ref="users">
              {users}
            </select>
          </div> 
          <br />
          <input type="submit" value="Submit" />
          <br />
        </form>
      </div>
    );
  }
}

AddNotification.propTypes = {
  addNotification: PropTypes.func 
}

export default AddNotification;
