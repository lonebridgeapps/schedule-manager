import React from 'react';
import '../styles/layout.css';
import './people.css';

import FormPeople from './form.people';
import TablePeople from './table.people';

const PeopleContainer = (props) =>{
    return(
        <div>
            <h2>Manage People</h2>

            <div className="container">
                
                <div className="content-60 panel">
                    <TablePeople people={props.people} />
                </div>
                
                <div className="content-30 panel">
                    <FormPeople onSubmit={this.insertPerson} />
                </div>

            </div>
        </div>
    );
}

export default PeopleContainer;
    