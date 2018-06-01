import React, { Component } from "react";
import PropTypes from "prop-types";
import "../index.css";

class SurveyItem extends Component {
  
  constructor(props) {
    super(props);
    this.state = {survey: this.props.survey}

    this.editSurvey = this.editSurvey.bind(this);
  }

  deleteSurvey(id) {
    this.props.onDelete(id);
  }

  updateSurvey() {
    this.props.onUpdate(this.state.survey);
  }

 
  editSurvey(event) {
   
    this.props.survey.question = event.target.value;
    this.setState({survey: this.state.survey});
  }

  render() {
    console.log(this.props);
    let question = this.props.survey.question;
    return (
      //can't use class, has to be classname
      <div className="Surveys">
        <div>
          {this.props.survey.question}{" "}
          <input type="text" placeholder='Edit' onChange={this.editSurvey} value={this.props.survey.question}  />
          <a href="#" onClick={this.updateSurvey.bind(this, this.props.survey.id)}>
            UPDATE 
          </a>
          <a href="#" onClick={this.updateSurvey.bind(this)}>
            SAVE 
          </a>
          <a
            href="#"
            onClick={this.deleteSurvey.bind(this, this.props.survey.id)}
          >
            DELETE
          </a>
        </div>
      </div>
    );
  }
}

SurveyItem.propTypes = {
  survey: PropTypes.object
};

export default SurveyItem;
