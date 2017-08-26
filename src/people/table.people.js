import React from 'react';

const TablePeople = (props) => {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Job Type</th>
                        <th>Start Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(props.people).map(key => {
                     return <tr key = {key}>
                                <td>{props.people[key].name}</td>
                                <td>{props.people[key].email}</td>
                                <td>{props.people[key].job}</td>
                                <td>{props.people[key].start}</td>
                                <td><input type="button" className="button" value="Delete"/></td>
                            </tr>
                    })}
                    
                </tbody>
            </table>

        </div>
    );
}

export default TablePeople;
