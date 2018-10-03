import React from 'react';
import './styles/common.css';

const ShiftSelect = (props) => {

    return(
        <select
            name="{props.shiftName}"
            value="{props.shifts[key]}"
            className="select-text"
            onChange={props.handleShiftSelectChange}
        >
            {Object.keys(props.shifts).map(key => {
                return <option 
                        className="option-text" 
                        key={key} 
                        label={props.shifts[key].nickname} 
                        />
            })}
        </select>
    );
    
};

export default ShiftSelect;