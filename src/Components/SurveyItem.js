import React, { Component } from "react";
import PropTypes from "prop-types";
import "../index.css";

class SurveyItem extends Component {
  
  constructor(props){
    super(props);
    this.state = {survey: this.props.survey}

    this.editSurvey = this.editSurvey.bind(this);
    
    // for revealing/hiding update input section
    this.state = {
      showUpdate: false,
    };
    this.showUpdate = this.showUpdate.bind(this);
    this.closeUpdate = this.closeUpdate.bind(this);


    // console.log(this);
  }

  deleteSurvey(id) {
    this.props.onDelete(id);
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

    // this.setState(prevState => ({
    //   isToggleOn: !prevState.isToggleOn
    // }));
  }

  updateSurvey(id) {
    this.setState({ showUpdate: false }, () => {
        document.removeEventListener('click', this.closeUpdate);
      });
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
          <button class="list-item UPDATE" href="#" onClick={this.showUpdate.bind(this, this.props.survey.id)}>
            UPDATE
          </button>          
          <button class="list-item DELETE"
            href="#"
            onClick={this.deleteSurvey.bind(this, this.props.survey.id)}
          >
            DELETE
          </button>
          {
            this.state.showUpdate
              ? (
                <div 
                  class="toggle-update"
                  ref={(element) => {
                    this.dropdownUpdate = element;
                  }}>

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
                  <button href="#" onClick={this.updateSurvey.bind(this)}>
                    SAVE
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

SurveyItem.propTypes = {
  survey: PropTypes.object
};

export default SurveyItem;
