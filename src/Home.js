import React, { Component } from 'react';
import './styles/App.css';
import './styles/layout.css';
import './styles/common.css';

class Home extends Component {

  render() {
    return (
      <div className="clear-float">
        <h2>Home</h2>

        <div>
          <form name="frmLogin">
            <div>
              <label htmlFor="txtEmail" className="text-label">Username</label>
              <input type="email" name="txtEmail" className="text-input" placeholder="Email Address" required />
            </div>

            <div>
              <label htmlFor="txtPassword">Password</label>
              <input type="password" name="txtPassword" className="text-input" placeholder="Password" required />
            </div>

            <button type="submit" name="btnSubmit" className="button">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Home;
