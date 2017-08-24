import React from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const ShiftSelect = (props) => {

    return(
        <SelectField
            name="{props.shiftName}"
            value="{props.shifts[key]}"
            onChange={props.handleShiftSelectChange}
        >
            {Object.keys(props.shifts).map(key => {
                return <MenuItem key={key} value={key} label={props.shifts[key].nickname} primaryText={props.shifts[key].name} />
            })}
        </SelectField>
    );
    
};

export default ShiftSelect;