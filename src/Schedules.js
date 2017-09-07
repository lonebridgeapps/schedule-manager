import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

import fire from './fire';

import ScheduleContainer from './container.schedule';
import FormSchedule from './form.schedule';

class Schedules extends Component {

    state = {
        people: [],
        shifts: [],
        isDrawerOpen: false,
    };

    componentDidMount = () => {
        console.log('schedule component did mount called');
        this.getFirebasePeople();
        this.getFirebaseShifts();
    }

    getFirebaseShifts = () => {
        const noData = {"testKey": {name: "no shifts available"}};
        fire.database().ref().child('shifts/').on('value', snapshot => {
        let shiftsData = (snapshot.val() !== null) ? snapshot.val() : noData;
        this.setState({shifts: shiftsData});
        })
    }

    getFirebasePeople = () => {
        const noData = {"testKey": {name: "no people available"}};
        fire.database().ref().child('people/').on('value', snapshot => {
        let peopleData = (snapshot.val() !== null) ? snapshot.val() : noData;
        this.setState({people: peopleData});
        })
    }

    handleClickRedirect = () => {
        console.log("rediect to Schedules New");
        this.history.push('/schedules/new');
    }

  render() {
    return (
        <div>
            <h2>Manage Schedules</h2>
        
            <div className="container">
                <div className="content">

                  <div className="panel">
                    <Link className="linkButton panel-button--left" to="/schedules/new" >Create Schedule</Link>
                  </div>
                  <div className="panel">
                      <table>
                          <thead>
                              <tr>
                                  <th>Schedule Name</th>
                                  <th>Created Date</th>
                                  <th>Last Updated</th>
                                  <th>Details</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                              </tr>
                          </tbody>
                      </table>
                    </div>
                </div>
            </div>
            
        </div>
    )
  }
}

export default Schedules;
