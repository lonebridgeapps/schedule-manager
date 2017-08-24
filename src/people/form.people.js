import React, { Component } from 'react';
import fire from '../fire';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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
            <TextField
              name="name"
              hintText="Name"
              floatingLabelText="Name"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="App-form__input-field">
            <TextField
              name="email"
              type="email"
              hintText="Email"
              floatingLabelText="Email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="App-form__input-field">
            <SelectField
              name="job"
              floatingLabelText="Job"
              value={this.state.job}
              onChange={this.handleSelectChange}
            >
              <MenuItem value={1} primaryText="Server" />
              <MenuItem value={2} primaryText="Bartender" />
              <MenuItem value={3} primaryText="Hostess" />
            </SelectField>
          </div>

          <FlatButton type="submit" style={style} label="Add Person"></FlatButton>

          <p className="App-form__validation-messaging"></p>
        </form>
      </div>
    );
  }
}

export default FormPeople