import React from 'react';
import SelectShift from './select.shift';

const TableSchedules = (props) => {
    return(
        <div>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(props.people).map(key => {
                        return <tr key={key}>
                                <td>{props.people[key].name}</td>
                                <td>
                                    <SelectShift shifts={props.shifts} handleShiftSelectChange={props.handleShiftSelectChange}/>
                                </td>
                                <td>
                                    <SelectShift shifts={props.shifts} handleShiftSelectChange={props.handleShiftSelectChange}/>
                                </td>
                                <td>
                                    <SelectShift shifts={props.shifts} handleShiftSelectChange={props.handleShiftSelectChange}/>
                                </td>
                                <td>
                                    <SelectShift shifts={props.shifts} handleShiftSelectChange={props.handleShiftSelectChange}/>
                                </td>
                                <td>
                                    <SelectShift shifts={props.shifts} handleShiftSelectChange={props.handleShiftSelectChange}/>
                                </td>
                                <td>
                                    <SelectShift shifts={props.shifts} handleShiftSelectChange={props.handleShiftSelectChange}/>
                                </td>
                                <td>
                                    <SelectShift shifts={props.shifts} handleShiftSelectChange={props.handleShiftSelectChange}/>
                                </td>
                            </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default TableSchedules;