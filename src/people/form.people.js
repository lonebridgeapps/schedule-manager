import React, { Component } from 'react';
import fire from '../fire';

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
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="App-form__input-field">
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="App-form__input-field">
            <select
              name="job"
              value={this.state.job}
              onChange={this.handleSelectChange}
            >
              <option value={1} primaryText="Server" />
              <option value={2} primaryText="Bartender" />
              <option value={3} primaryText="Hostess" />
            </select>
          </div>

          <button type="submit" style={style}>Add Person</button>

          <p className="App-form__validation-messaging"></p>
        </form>
      </div>
    );
  }
}

export default FormPeople