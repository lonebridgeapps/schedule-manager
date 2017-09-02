import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

import fire from './fire';

import ScheduleContainer from './container.schedule';
import FormSchedule from './form.schedule';

class Schedules extends Component {
    componentDidMount = () => {
        
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
