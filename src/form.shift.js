import React, { Component } from 'react';

import './form.css';
import fire from './fire';

import FlatButton from 'material-ui/FlatButton';

import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import Snackbar from 'material-ui/Snackbar';

const style = {
    margin: 12,
};

class FormShift extends Component {
  state = {
      name: '', 
      nickname:'', 
      hours: 0,
      start: '',
      end: '',
      open: false};

  handleTouchTap = () => {
    alert('onTouchTap triggered on the title component');
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({[name]: value});
  }

  handleChangeTimePicker_Start = (event, date) => {
      console.log('start date', date);
      this.setState({start: date});
      console.log('state start', this.state.start);
  }

  handleChangeTimePicker_End = (event, date) => {
      this.setState({end: date});
  }

  handleRequestClose = () => {
    this.setState({open: false});
  };

  handleSubmit = (event) => {
    event.preventDefault();

    fire.database().ref('shifts').push({
      name: this.state.name,
      nickname: this.state.nickname,
      hours: this.state.hours,
      start: this.state.start,
      end: this.state.end
    });

    this.setState({ 
        name: '', 
        nickname: '', 
        hours: 0,
        start:'', 
        end: '',
        open: true,});
  }

  render(){
    return(
      <div className="App-form App-form__shift-container">
        
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
              name="nickname"
              type="text"
              hintText="Short Description"
              floatingLabelText="Schedule Short Description"
              value={this.state.nickname}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="App-form__input-field">
            <TimePicker 
                format='ampm'
                minutesStep={5}
                pedantic={true}
                hintText='ShiftStartTime'
                onChange={this.handleChangeTimePicker_Start} />
          </div>

          <div className="App-form__input-field">
            <TimePicker 
                format="ampm"
                minutesStep={5}
                pedantic={true}
                hintText="ShiftEndTime"
                onChange={this.handleChangeTimePicker_End} />
          </div>

          <FlatButton type="submit" style={style} label="Add Shift"></FlatButton>

          <Snackbar
            open={this.state.open}
            message="Successfully added shift."
            autoHideDuration={3000}
            onRequestClose={this.handleRequestClose}
            />

          <p className="App-form__validation-messaging"></p>
        </form>
      </div>
    );
  }
}

export default FormShift