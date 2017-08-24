import React, { Component } from 'react';
import './App.css';
import './layout.css';

class Home extends Component {

  render() {
    return (
      <div className="clear-float">
        <h2>Home</h2>

        <div>
          <form name="frmLogin">
            <label htmlFor="txtEmail">Username</label>
            <input type="email" name="txtEmail" placeholder="Email Address" required />

            <label htmlFor="txtPassword">Password</label>
            <input type="password" name="txtPassword" placeholder="Password" required />

            <button type="submit" name="btnSubmit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Home;
