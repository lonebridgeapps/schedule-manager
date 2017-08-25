import React from 'react';

const TableShift = (props) => {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Nickname</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(props.shifts).map(key => {
                     return <tr key = {key}>
                                <td>{props.shifts[key].name}</td>
                                <td>{props.shifts[key].nickname}</td>
                                <td>{props.shifts[key].start}</td>
                                <td>{props.shifts[key].end}</td>
                            </tr>
                    })}
                    
                </tbody>
            </table>

        </div>
    );
}

export default TableShift;
