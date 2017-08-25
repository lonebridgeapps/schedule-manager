import React from 'react';
import './layout.css';

import TableSchedules from './table.schedule';


const ScheduleContainer = (props) =>{
    return(
        <div>
            <h2>Manage Scheduled</h2>
        
            <div className="container">
                <div>
                    <button type="button" name="btnCreateSchedule">Create Schedule</button>
                    <input type="text" name="scheduleFilter" placeholder="filter schedules by name" />
                    <button type="button" name="btnScheduleFilter">Search</button>
                </div>
                <div>
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

                <TableSchedules 
                    people={props.people} 
                    shifts={props.shifts} 
                    handleShiftSelectChange={props.handleShiftSelectChange} />
            </div>
        </div>
    );
}

export default ScheduleContainer;
    