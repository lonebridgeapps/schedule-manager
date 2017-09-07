import React, { Component } from 'react';
import './styles/App.css';
import './styles/layout.css';
import './styles/NavMenu.css';

import Home from './Home';
import People from './People';
import Shifts from './Shifts';
import Schedules from './Schedules';
import SchedulesNew from './Schedules.New';

import { Link, Route, BrowserRouter as Router } from 'react-router-dom';


class App extends Component {

  // insertPerson = (personInfo) => {
  //   this.setState(prevState => ({
  //     cards: prevState.card.concat(personInfo)
  //   }));
  // };

  // openDrawer = (event) => {
  //   event.preventDefault();
  //   this.setState({isDrawerOpen: true});
  // }

  // closeDrawer = (event) => {
  //   event.preventDefault();
  //   this.setState({isDrawerOpen: false});
  // }

  render() {
    return (
        <div className="App">
          <Router>
            <div className="container">
                <div className="left-content left-content--naveMenu">
                    <div className="sideMenu" >
                        <h3>Schedule Manager</h3>
                        <ul className="sideNavBar">
                            <li >
                                <Link to="/people" >People</Link>
                            </li>
                            
                            <li>
                                <Link to="/shifts">Shifts</Link>
                            </li>
                            
                            <li>
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
                        <Route path="/schedules/new" component={ SchedulesNew} />
                    </div>
                </div>
              
            </div>
          </Router>
        </div>
    )
  }
}

export default App;
