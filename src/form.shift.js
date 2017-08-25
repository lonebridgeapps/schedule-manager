import React, { Component } from 'react';

import './form.css';
import fire from './fire';

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
            <input 
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="App-form__input-field">
            <input
              name="nickname"
              type="text"
              placeholder="Short Description"
              value={this.state.nickname}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="App-form__input-field">
            {/*<TimePicker 
                format='ampm'
                minutesStep={5}
                pedantic={true}
                hintText='ShiftStartTime'
                onChange={this.handleChangeTimePicker_Start} />*/}
          </div>

          <div className="App-form__input-field">
            {/*<TimePicker 
                format="ampm"
                minutesStep={5}
                pedantic={true}
                hintText="ShiftEndTime"
                onChange={this.handleChangeTimePicker_End} />*/}
          </div>

          <button type="submit" style={style}>Add Shift</button>

          <p className="App-form__validation-messaging"></p>
        </form>
      </div>
    );
  }
}

export default FormShift