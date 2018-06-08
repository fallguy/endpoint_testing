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
    this.props.onUpdate(this.props.survey);
  }

  editSurvey(event) {
    this.props.survey[event.target.name] = event.target.value;
    this.setState({survey: this.state.survey});

  }

  render() {
    console.log(this.props);
    let question = this.props.survey.question;
    let category = this.props.survey.category;
    let widget = this.props.survey.widget;
    let categoryOptions = this.props.category.data.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    let widgetOptions = this.props.widget.data.map(widget => {
      return <option key={widget} value={widget}>{widget}</option>
    });
    return (
      <div className="Surveys">
        <div>
          <span class="list-item question">{this.props.survey.question}{" "}</span>
          <span class="list-item category">{this.props.survey.category}{" "}</span>
          <span class="list-item widget">{this.props.survey.widget}</span>
          <div class="toggle-update">
            <label>Question</label>
            <input name="question" type="text" placeholder="Edit" onChange={this.editSurvey} value={this.props.survey.question} />
            <label>Category</label>
            <select ref="category" value={this.props.survey.question} name="question" onChange={this.editSurvey}>
              {categoryOptions}}
            </select>
        
            <label>Widget</label>
            <select ref="widget" name="widget" value={this.props.survey.widget} onChange={this.editSurvey} >
              {widgetOptions}}
            </select>
            <a href="#" onClick={this.updateSurvey.bind(this)}>
              SAVE
            </a>
          </div>
          <a href="#" onClick={this.updateSurvey.bind(this, this.props.survey.id)}>
            UPDATE
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
