import React, { Component } from 'react';
import './App.css';
import './layout.css';

import Home from './Home';
import People from './People';
import Shifts from './Shifts';
import Schedules from './Schedules';

import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {

  insertPerson = (personInfo) => {
    this.setState(prevState => ({
      cards: prevState.card.concat(personInfo)
    }));
  };

  openDrawer = (event) => {
    event.preventDefault();
    this.setState({isDrawerOpen: true});
  }

  closeDrawer = (event) => {
    event.preventDefault();
    this.setState({isDrawerOpen: false});
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Router>
            <div className="container">
                <div className="left-content">
                    <div style={{height: "100vh", width: "300px"}}>
                        <h3 style={{padding: "10px 20px"}}>Schedule Manager</h3>
                        <ul>
                            <li style={{padding: "10px"}} >
                                <Link to="/people" >People</Link>
                            </li>
                            <hr />
                            <li style={{padding: "10px"}}>
                                <Link to="/shifts">Shifts</Link>
                            </li>
                            <hr />
                            <li style={{padding: "10px"}}>
                                <Link to="/schedules" >Schedules</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="content">
                    <div className="clear-float">
                        <Route exact path="/" component={ Home } />
                        <Route path="/people" component={ People } />
                        <Route path="/shifts" component={ Shifts } />
                        <Route path="/schedules" component={ Schedules } />
                    </div>
                </div>
              
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
