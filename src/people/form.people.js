import React, { Component } from 'react';
import fire from '../fire';

import '../styles/common.css';

const style = {
  margin: 12,
};

class FormPeople extends Component {
  state = {name: '', email:'', job: 1};

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({[name]: value});
  }

  handleSelectChange = (event, index, value) => {
    this.setState({job: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();

    fire.database().ref('people').push({
      name: this.state.name,
      email: this.state.email,
      job: this.state.job
    });

    this.setState({ name: '', email: '', job: 1});
  }

  render(){
    return(
      <div className="App-form App-form__people-container">
        <form onSubmit={this.handleSubmit} className="App-form">

          <div className="App-form__input-field">
            <label htmlFor="name" className="text-label">Name</label>
            <input
              name="name"
              type="text"
              className="text-input"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="App-form__input-field">
            <label htmlFor="email" className="text-label">Email</label>
            <input
              name="email"
              type="email"
              className="text-input"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="App-form__input-field">
            <label htmlFor="job" className="text-label">Job Title</label>
            <select
              name="job"
              className="text-input"
              value={this.state.job}
              onChange={this.handleSelectChange}
            >
              <option value={1} label="Server" />
              <option value={2} label="Bartender" />
              <option value={3} label="Hostess" />
            </select>
          </div>

          <div className="App-form__input-field">
            <label htmlFor="startDate" className="text-label">Start Date</label>
            <input
              name="startDate"
              type="date"
              className="text-input"
              placeholder="Start Date"
              value={this.state.startDate}
              onChange={this.handleInputChange}
            />
          </div>

          <button type="submit" className="button">Add Person</button>

          <p className="App-form__validation-messaging"></p>
        </form>
      </div>
    );
  }
}

export default FormPeople