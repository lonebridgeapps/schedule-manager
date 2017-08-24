import React from 'react';
import './layout.css';

import FormShift from './form.shift';
//import ListShift from './list.shift';
import Paper from 'material-ui/Paper';

import HeaderBar from './headerBar.js';
import TableShift from './table.shift.js';

import Drawer from 'material-ui/Drawer';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const fabStyle = {

};

const ShiftContainer = (props) =>{
    return(
        <Paper zDepth={1}>
            <HeaderBar title="Manage Shifts" showIcon={false}/>

            <div className="container">
                <TableShift shifts={props.shifts}/>

                <Drawer width={300} 
                    openSecondary={true} 
                    open={props.isDrawerOpen}
                    disableSwipeToOpen={true} >
                    
                    <AppBar
                        title={<span>Add Shift</span>}
                        iconElementLeft={<IconButton onTouchTap={props.closeDrawer}><NavigationClose /></IconButton>}
                    />
                    <FormShift />
                </Drawer>

                <FloatingActionButton style={fabStyle}
                    backgroundColor='#F00'>
                    <ContentAdd onTouchTap={props.openDrawer} />
                </FloatingActionButton>
            </div>
        </Paper>
    );
}

export default ShiftContainer;
    