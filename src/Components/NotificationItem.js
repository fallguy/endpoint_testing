import React, { Component } from "react";
import PropTypes from "prop-types";
import "../index.css";

class NotificationItem extends Component {
  
  constructor(props){
    super(props);
    this.state = {notification: this.props.notification}

    this.editNotification = this.editNotification.bind(this);
    console.log(this);
  }

  deleteNotification(id) {
    this.props.onDelete(id);
  }

  updateNotification(id) {
    // console.log('notification features - question: ' + this.props.notification.question + ' widget: ' + this.props.notification.widget);
    // this.props.notification.question = 'I\'m changed!!!'
    // this.setState({notification:this.state.notification});
    this.props.onUpdate(this.props.notification);
  }

  editNotification(event) {
    this.props.notification[event.target.name] = event.target.value;
    this.setState({notification: this.state.notification});

  }

  render() {
    console.log(this.props);
    let time = this.props.notifications.time;
    let questionOption = this.props.surveys.map(survey => {
      return <option key={survey.id} value={survey.id}>{survey.question}</option>
    });
    // let categoryOptions = this.props.category.data.map(category => {
    //   return <option key={category} value={category}>{category}</option>
    // });
    // let widgetOptions = this.props.widget.data.map(widget => {
    //   return <option key={widget} value={widget}>{widget}</option>
    // });
    // let newText = text.split('\n').map(i => {
    return (
      //can't use class, has to be classname
      <div className="Notifications">
        <div>
          <span class="list-item question">{this.props.notifications.question}{" "}</span>
          <span class="list-item time">{this.props.notifications.time}</span>
          <div class="toggle-update">
            <label>Time</label>
            <input name="time" type="text" placeholder="1528239669" onChange={this.editNotification} value={this.props.notifications.time} />
            <label>Question</label><br />
            <select ref="question">
              {questionOption}
            </select>
            <a href="#" onClick={this.updateNotification.bind(this)}>
            SAVE
            </a>
          </div>
          <a href="#" onClick={this.updateNotification.bind(this, this.props.notifications.id)}>
            UPDATE
          </a>          
          <a href="#" onClick={this.deleteNotification.bind(this, this.props.notifications.id)}>
            DELETE
          </a>
        </div>
      </div>
    );
  }
}

NotificationItem.propTypes = {
  notifications: PropTypes.object
};

export default NotificationItem;
