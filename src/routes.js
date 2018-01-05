import React, { Component } from 'react';

import App from './App';
import People from './People';
import Shifts from './Shifts';
import Schedules from './Schedules';

import { Route, BrowserRouter as Router } from 'react-router-dom';

const Routes = () =>{
    <Router>
        <Route name="people" path="/people" component={People} />
        <Route name="shifts" path="/shifts" component={Shifts} />
        <Route name="schedule" path="/schedule" component={Schedules} />
        <Route name="scheduleCreate" path="/scheduleCreate" component={SchedulesCreate} />
    </Router>
};

export default Routes;