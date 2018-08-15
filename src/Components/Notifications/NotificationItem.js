import React, { Component } from "react";
import PropTypes from "prop-types";

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

  }

  deleteNotification(id, time) {
    this.props.onDelete(id, time);
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
    this.props.notification.scheduled_at = parseInt(this.props.notification.scheduled_at);
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
    
    let id = this.props.notification.id
    let time = this.props.notification.scheduled_at;
    
    let question = ""
    if(this.props.notification.survey){
      question = this.props.notification.survey.question;
    }
    let user = this.props.notification.user_id;
    let questionOptions = this.props.surveys.map(survey => {
      return <option key={survey.id} value={survey.id}>{survey.question} {survey.category} {survey.widget}</option>
    });
    return (
      <div className="Notifications">
        <div>
          <span className="list-item time">{time}{" "}</span>
          <span className="list-item question">{question}</span>
          <span className="list-item question">{user}</span>
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
                    <input name="scheduled_at" type="text" placeholder="1528239669" onChange={this.editNotification} value={time} />
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
