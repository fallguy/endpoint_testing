import React, { Component } from 'react';
import SurveyItem from './SurveyItem';
import PropTypes from 'prop-types';

class Surveys extends Component {
  deleteSurvey(id){
    this.props.onDelete();
  }

  render() {
    console.log(this.props);
    let surveyItems;
    if (this.props.surveys) {
      surveyItems = this.props.surveys.map(survey => {
        console.log(survey);
        return (
          <SurveyItem onDelete={this.deleteSurvey.bind(this)} key={survey.question} survey={survey} />
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
  onDelete: PropTypes.func
}
export default Surveys;
