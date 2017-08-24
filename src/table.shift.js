import React from 'react';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const TableShift = (props) => {
    return(
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Nickname</TableHeaderColumn>
                        <TableHeaderColumn>Start Time</TableHeaderColumn>
                        <TableHeaderColumn>End Time</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Object.keys(props.shifts).map(key => {
                     return <TableRow key = {key}>
                                <TableRowColumn>{props.shifts[key].name}</TableRowColumn>
                                <TableRowColumn>{props.shifts[key].nickname}</TableRowColumn>
                                <TableRowColumn>{props.shifts[key].start}</TableRowColumn>
                                <TableRowColumn>{props.shifts[key].end}</TableRowColumn>
                            </TableRow>
                    })}
                    
                </TableBody>
            </Table>

        </div>
    );
}

export default TableShift;
