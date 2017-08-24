import React from 'react';
import '../layout.css';
import './people.css';

import HeaderBar from '../headerBar';
import FormPeople from './form.people';
import ListPeople from './list.people';
import Paper from 'material-ui/Paper';

const PeopleContainer = (props) =>{
    return(
        <Paper zDepth={1}>
            <HeaderBar title="Manage People" showIcon={false}/>

            <div className="container">

                <div className="right-content">
                    <ListPeople people={props.people} />
                </div>
                
                <div className="content">
                    <FormPeople onSubmit={this.insertPerson} />
                </div>

            </div>
        </Paper>
    );
}

export default PeopleContainer;
    