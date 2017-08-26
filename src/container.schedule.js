import React from 'react';
import './styles/layout.css';

import TableSchedules from './table.schedule';
import FormSchedule from './form.schedule';


const ScheduleContainer = (props) =>{
    return(
        <div>
            <h2>Manage Scheduled</h2>
        
            <div className="container">
                <div className="content-50">
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

                <div className="content-50">
                    <FormSchedule />
                </div>
            </div>
        </div>
    );
}

export default ScheduleContainer;
    