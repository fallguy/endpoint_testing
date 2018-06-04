import React, { Component } from "react";
import PropTypes from "prop-types";
import "../index.css";

class SurveyItem extends Component {
  
  constructor(props){
    super(props);
    this.state = {survey: this.props.survey}
    this.editSurvey = this.editSurvey.bind(this);
    console.log(this);
  }

  deleteSurvey(id) {
    this.props.onDelete(id);
  }

  updateSurvey(id) {
    // console.log('survey features - question: ' + this.props.survey.question + ' widget: ' + this.props.survey.widget);
    // this.props.survey.question = 'I\'m changed!!!'
    // this.setState({survey:this.state.survey});
    this.props.onUpdate(this.props.survey);
  }

  editSurvey(event) {
    this.props.survey.question=event.target.value;
    this.props.survey.widget=event.target.value;
    this.props.survey.category=event.target.value;
    this.setState({survey: this.state.survey});
  }

  render() {
    console.log(this.props);
    let question = this.props.survey.question;
    let category = this.props.survey.category;
    let widget = this.props.survey.widget;
    return (
      //can't use class, has to be classname
      <div className="Surveys">
        <div>
          {this.props.survey.question}{" "}{this.props.survey.category}{" "}{this.props.survey.widget}
          <input name="question" type="text" placeholder="Edit" onChange={this.editSurvey} value={this.props.survey.question} />
          <input name="widget" type="text" placeholder="happiness" onChange={this.editSurvey} value={this.props.survey.category} />
          <input name="category" type="text" placeholder="mood-slider" onChange={this.editSurvey} value={this.props.survey.widget} />
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
