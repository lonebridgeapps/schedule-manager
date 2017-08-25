import React from 'react';

const ShiftSelect = (props) => {

    return(
        <select
            name="{props.shiftName}"
            value="{props.shifts[key]}"
            onChange={props.handleShiftSelectChange}
        >
            {Object.keys(props.shifts).map(key => {
                return <option key={key} value={key} label={props.shifts[key].nickname} />
            })}
        </select>
    );
    
};

export default ShiftSelect;