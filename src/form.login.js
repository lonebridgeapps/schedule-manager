import React, { Component } from 'react';

class FormLogin extends React.Component {
	state = {username: '', password: ''}

	handleSubmit = (event) => {
  	event.preventDefault();
    //ajax.. (fetch or axios)
    console.log('form state ', this.state);
  };

	render(){
  	return(
    <div className="App-form">
  	<form onSubmit={this.handleSubmit}>
      
      <div className="App-form__input-field">
        <label className="App-form__input-label" htmlFor="userName">Username</label>
        <input type="text" 
          id="userName"
          value={this.state.userName}
          placeholder="Username" required />
      </div>

      <div className="App-form__input-field">
        <label className="App-form__input-label" htmlFor="password">Password</label>
        <input type="password"
          id="password"
          value={this.state.password}
          placeholder="Password" required />
      </div>

      <button type="submit">Sign In</button>
      {/*<button type="button">Register</button>*/}
    </form>
    </div>
    );
  }
}

export default FormLogin