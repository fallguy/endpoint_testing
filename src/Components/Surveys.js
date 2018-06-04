import React, { Component } from 'react';
import SurveyItem from './SurveyItem';
import PropTypes from 'prop-types';

// look up react component API
class Surveys extends Component {
  
  // constructor(props){
  //   super(props);
  //   this.state = {surveys: this.props.surveys}
  // }

  deleteSurvey(id){
    this.props.onDelete(id);
  }

  updateSurvey(survey){
    // this.setState({surveys:this.props.surveys})
    this.props.onUpdate(survey);
  }

  render() {
    console.log(this.props);
    let surveyItems;
    if (this.props.surveys) {
      surveyItems = this.props.surveys.map(survey => {
        console.log(survey);
        return (
          <SurveyItem onDelete={this.deleteSurvey.bind(this)} onUpdate={this.updateSurvey.bind(this)} key={survey.question} survey={survey} />
        )
      });
    }
    return (
      <div className="Surveys">
      <h3>Latest Surveys</h3>
      {surveyItems}
      </div>
    );
  }
}

Surveys.propTypes = {
  surveys: PropTypes.array,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func
}
export default Surveys;
