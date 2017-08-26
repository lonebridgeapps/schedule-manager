import React, { Component } from 'react';

import fire from './fire';

import ScheduleContainer from './container.schedule';
import FormSchedule from './form.schedule';

class Schedules extends Component {

  render() {
    return (
        <div>
            <h2>Manage Schedules</h2>
        
            <div className="container">
                <div className="content-60 panel">
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

                <div className="content-30 panel">
                    <FormSchedule />
                </div>
            </div>
            
        </div>
    )
  }
}

export default Schedules;
