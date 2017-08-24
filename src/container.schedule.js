import React from 'react';
import './layout.css';

import Paper from 'material-ui/Paper';

import HeaderBar from './headerBar.js';
import TableSchedules from './table.schedule';

import SelectShift from './select.shift';

const ScheduleContainer = (props) =>{
    return(
        <Paper zDepth={1}>
            <HeaderBar title="Manage Scheduled" showIcon={false} />
        
            <div className="container">
                <TableSchedules 
                    people={props.people} 
                    shifts={props.shifts} 
                    handleShiftSelectChange={props.handleShiftSelectChange} />
            </div>
        </Paper>
    );
}

export default ScheduleContainer;
    