import React, { Component } from 'react';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

// look up react component API
class Notifications extends Component {
  
  deleteNotification(id, time){
    this.props.onDelete(id, time);
  }

  updateNotification(notification){
    this.props.onUpdate(notification);
  }

  render() {
    let notificationItems;
    if (this.props.notifications.length > 0) {
      notificationItems = this.props.notifications.map(notification => {
        return (
          <NotificationItem time={this.props.time} surveys={this.props.surveys} onDelete={this.deleteNotification.bind(this)} onUpdate={this.updateNotification.bind(this)} key={notification.time} notification={notification} />
        )
      });
    }
    return (
      <div className="Notifications">
      <h3>Existing Notifications</h3>
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
