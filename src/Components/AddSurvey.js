import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddSurvey extends Component {

  async handleSubmit(e){
    const { survey } = this.props.surveys;
    const surveyId = this.props.surveys.length + 1;
    const question = this.refs.question.value;
    const category = this.refs.category.value;
    const widget = this.refs.widget.value;
    const newSurvey = { "id": surveyId.toString(), "question": question, "category": category, "widgets": widget };

    console.log('Submitted: '); 
    if (this.refs.question.value === ''){
      alert('Question is required');
    } else {
      this.setState({newSurvey:{
        id: uuid.v4(),
        question: this.refs.question.value,
        category: this.refs.category.value,
        widget: this.refs.widget.value
      }}, function(){
        this.props.addSurvey(this.state.newSurvey);
      });
    }
    e.preventDefault();
    this.refs.question.value = '';
  }
  render() {
    let categoryOptions = this.props.category.data.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    let widgetOptions = this.props.widget.data.map(widget => {
      return <option key={widget} value={widget}>{widget}</option>
    });
    return (
      <div>
        <h3>Add Survey</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Question</label><br />
            <input type="text" ref="question"/>
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              {categoryOptions}}
            </select>
          </div> 
          <div>
            <label>Widget</label><br />
            <select ref="widget">
              {widgetOptions}}
            </select>
          </div> 
          <br />
          <input type="submit" value="Submit" />
          <br />
        </form>
      </div>
    );
  }
}

AddSurvey.propTypes = {
  categories: PropTypes.array,
  widgets: PropTypes.array,
  addSurvey: PropTypes.func 
}

export default AddSurvey;
