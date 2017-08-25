import React from 'react';
import './layout.css';

import FormShift from './form.shift';
import TableShift from './table.shift.js';

const fabStyle = {

};

const ShiftContainer = (props) =>{
    return(
        <div>
            <h2>Manage Shifts</h2>

            <div className="container">
                <TableShift shifts={props.shifts}/>

                <FormShift />
            </div>
        </div>
    );
}

export default ShiftContainer;
    