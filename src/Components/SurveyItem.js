import React, { Component } from "react";
import PropTypes from "prop-types";
import "../index.css";

class SurveyItem extends Component {
  deleteSurvey(id) {
    this.props.onDelete(id);
  }

  updateSurvey(id) {
    this.props.onUpdate(id);
  }

  render() {
    console.log(this.props);
    return (
      //can't use class, has to be classname
      <div className="Surveys">
        <div>
          {this.props.survey.question}{" "}
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
