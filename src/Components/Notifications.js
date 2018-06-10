import React, { Component } from 'react';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

// look up react component API
class Notifications extends Component {
  
  // constructor(props){
  //   super(props);
  //   this.state = {notifications: this.props.notifications}
  // }

  deleteNotification(id){
    this.props.onDelete(id);
  }

  updateNotification(notification){
    // this.setState({notifications:this.props.notifications})
    this.props.onUpdate(notification);
  }

  render() {
    console.log(this.props);
    let notificationItems;
    if (this.props.notifications) {
      notificationItems = this.props.notifications.map(notification => {
        console.log(notification);
        return (
          <NotificationItem notifications={this.props.notifications} surveys={this.props.surveys} surveyId={this.props.surveyIds} onDelete={this.deleteNotification.bind(this)} onUpdate={this.updateNotification.bind(this)} key={notification.time} notification={notification} />
        )
      });
    }
    return (
      <div className="Notifications">
      <h3>Latest Notifications</h3>
      {notificationItems}
      </div>
    );
  }
}

Notifications.propTypes = {
  notifications: PropTypes.array,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func
}
export default Notifications;
