import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

import Home from './Home';
import People from './People';
import Shifts from './Shifts';
import Schedules from './Schedules';

import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
// import routes from './routes.js';


const NavMenu = (props) => {
    return(
        <Router>
            <div>
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
                            <Link to="/schedule" >Schedules</Link>
                        </li>
                    </ul>

                </div>

                <div className="content">
                    <Route exact path="/" component={ Home } />
                    <Route path="/people" component={ People } />
                    <Route path="/shifts" component={ Shifts } />
                    <Route path="/schedules" component={ Schedules } />
                </div>
            </div>
        </Router>
        
    );
}

export default NavMenu;