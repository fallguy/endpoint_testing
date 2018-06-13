import React, { Component } from "react";
import PropTypes from "prop-types";
import "../index.css";

class NotificationItem extends Component {
  
  constructor(props){
    super(props);
    this.state = {notification: this.props.notification}

    this.editNotification = this.editNotification.bind(this);
    
    // for revealing/hiding update input section
    this.state = {
      showUpdate: false,
    };
    this.showUpdate = this.showUpdate.bind(this);
    this.closeUpdate = this.closeUpdate.bind(this);

    // console.log(this);
  }

  deleteNotification(id, time) {
    this.props.onDelete(id);
    this.props.onDelete(time);
    console.log(time);
  }

  showUpdate(event) {
    event.defaultPrevented;

    this.setState({ showUpdate: true }, () => {
      document.addEventListener('click', this.closeUpdate);
    });
  }

  closeUpdate(event) {

    if (!this.dropdownUpdate.contains(event.target)) {

      this.setState({ showUpdate: false }, () => {
        document.removeEventListener('click', this.closeUpdate);
      });
    }
  }

  updateNotification(id) {
    this.setState({ showUpdate: false }, () => {
      document.removeEventListener('click', this.closeUpdate);
    });
    this.props.onUpdate(this.props.notification);
  }

  editNotification(event) {
    this.props.notification[event.target.name] = event.target.value;
    this.setState({notification: this.state.notification});

  }

  render() {
    console.log(this.props);
    let id = this.props.notification.id
    let time = this.props.notification.time;
    let question = this.props.surveys.question;
    let questionOptions = this.props.surveys.map(survey => {
      return <option key={survey.id} value={survey.id}>{survey.question} {survey.category} {survey.widget}</option>
    });
    return (
      <div className="Notifications">
        <div>
          <span className="list-item time">{time}{" "}</span>
          <span className="list-item question">{question}</span>
          <button className="list-item UPDATE" href="#" onClick={this.showUpdate.bind(this, id)}>
            UPDATE
          </button>
          <button className="list-item DELETE"
            href="#" onClick={this.deleteNotification.bind(this, id, time)}>
            DELETE
          </button>
          {
            this.state.showUpdate
              ? (
                <div 
                  className="toggle-update"
                  ref={(element) => {
                    this.dropdownUpdate = element;
                  }}>

                  <label>Time</label>
                    <input name="time" type="text" placeholder="1528239669" onChange={this.editNotification} value={time} />
                  <label>Question</label>
                    <select ref="question" value={question} name="question" onChange={question} >
                    {questionOptions}
                    </select>
                  <button href="#" onClick={this.updateNotification.bind(this)}>
                    Save  
                  </button>
                </div>
              )
              : (
                null
                )
          }
      </div>
    </div>
   );
  }
}

NotificationItem.propTypes = {
  notification: PropTypes.object
};

export default NotificationItem;
