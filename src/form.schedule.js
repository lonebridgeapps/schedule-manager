import React, { Component } from 'react';

import './styles/form.css';
import './styles/common.css';

import fire from './fire';

const style = {
    margin: 12,
};

class FormSchedule extends Component {
  state = {
      name: '', 
      job: '',
      detail: '',
      createDate: new Date(),
      open: false};

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({[name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();

    fire.database().ref('schedules').push({
      name: this.state.name,
      job: this.state.job,
      detail: this.state.detail,
      createDate: this.state.createDate
    });

    this.setState({ 
        name: '', 
        job:'', 
        detail: '',
        open: true,});
  }

  render(){
    return(
      <div className="App-form App-form__shift-container">
        
        <form onSubmit={this.handleSubmit} className="App-form">

          <div className="App-form__input-field">
            <label htmlFor="name" className="text-label">Name</label>
            <input 
              type="text"
              name="name"
              className="text-input"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="App-form__input-field">
            <label htmlFor="details" className="text-label">Details</label>
            <input
              name="details"
              type="text"
              className="text-input"
              placeholder="Details"
              value={this.state.details}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <button type="submit" className="button">Add Schedule</button>

          <p className="App-form__validation-messaging"></p>
        </form>
      </div>
    );
  }
}

export default FormSchedule