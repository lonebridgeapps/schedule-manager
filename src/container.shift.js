import React from 'react';
import './styles/layout.css';

import FormShift from './form.shift';
import TableShift from './table.shift.js';

const fabStyle = {

};

const ShiftContainer = (props) =>{
    return(
        <div>
            <h2>Manage Shifts</h2>

            <div className="container">
                <div className="content-60 panel">
                    <TableShift shifts={props.shifts}/>
                </div>
                <div className="content-30 panel">
                    <FormShift />
                </div>
            </div>
        </div>
    );
}

export default ShiftContainer;
    