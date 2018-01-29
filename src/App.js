import React, { Component } from 'react';
import './styles/App.css';
import './styles/layout.css';
import './styles/NavMenu.css';

import Home from './Home';
import PeoplePage from './PeoplePage';
import Shifts from './Shifts';
import Schedules from './Schedules';
import ScheduleCreate from './Schedule.Create';

import { Link, Route, BrowserRouter as Router } from 'react-router-dom';


class App extends Component {

  // insertPerson = (personInfo) => {
  //   this.setState(prevState => ({
  //     cards: prevState.card.concat(personInfo)
  //   }));
  // };

  render() {
    return (
        <div className="App">
          <Router>
            <div className="container">
                <div className="left-content left-content--navMenu">
                    <div className="sideMenu" >
                        <div className="sideMenu__item"><Link to="/">Schedule Manager</Link></div>
                        <div className="sideMenu__item"><Link to="/people" >People</Link></div>
                        <div className="sideMenu__item"><Link to="/shifts">Shifts</Link></div>
                        <div className="sideMenu__item"><Link to="/schedules" >Schedules</Link></div>
                        <div className="sideMenu__item sideMenu__item--subItem"><Link to="/scheduleCreate" >Create</Link></div>
                    </div>
                </div>

                <div className="content">
                    <div className="clear-float">
                        <Route exact path="/" component={ Home } />
                        <Route path="/people" component={ PeoplePage } />
                        <Route path="/shifts" component={ Shifts } />
                        <Route path="/schedules" component={ Schedules } />
                        <Route path="/scheduleCreate" component={ScheduleCreate} />
                    </div>
                </div>
              
            </div>
          </Router>
        </div>
    )
  }
}

export default App;
