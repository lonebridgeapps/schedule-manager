import React from 'react';
import SelectShift from './select.shift';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const TableSchedules = (props) => {
    return(
        <div>
            {/*<SelectShift shifts={props.shifts} handleShiftSelectChange={props.handleShiftSelectChange}/>*/}

            <Table>
                <TableHeader>
                <TableRow>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Sunday</TableHeaderColumn>
                    <TableHeaderColumn>Monday</TableHeaderColumn>
                    <TableHeaderColumn>Tuesday</TableHeaderColumn>
                    <TableHeaderColumn>Wednesday</TableHeaderColumn>
                    <TableHeaderColumn>Thursday</TableHeaderColumn>
                    <TableHeaderColumn>Friday</TableHeaderColumn>
                    <TableHeaderColumn>Saturday</TableHeaderColumn>
                </TableRow>
                </TableHeader>
                <TableBody>
                    {Object.keys(props.people).map(key => {
                        return <TableRow key={key}>
                                <TableRowColumn>{props.people[key].name}</TableRowColumn>
                                <TableRowColumn>
                                    {/*<SelectShift shifts={props.people[key].shifts} handleShiftSelectChange={props.handleShiftSelectChange}/>*/}
                                </TableRowColumn>
                                <TableRowColumn></TableRowColumn>
                                <TableRowColumn></TableRowColumn>
                                <TableRowColumn></TableRowColumn>
                                <TableRowColumn></TableRowColumn>
                                <TableRowColumn></TableRowColumn>
                                <TableRowColumn></TableRowColumn>
                            </TableRow>
                    })}
                </TableBody>
            </Table>
        </div>
    );
}

export default TableSchedules;