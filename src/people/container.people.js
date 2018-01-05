import React from 'react';
import '../styles/layout.css';
import '../styles/people.css';

import FormPeople from './form.people';
import TablePeople from './table.people';

const PeopleContainer = (props) =>{
    return(
        <div>
            <h2>Manage People</h2>

            <div className="container">
                
                <div className="panel content-60">
                    <TablePeople people={props.people} />
                </div>
                
                <div className="panel content-30">
                    <FormPeople onSubmit={this.insertPerson} />
                </div>

            </div>
        </div>
    );
}

export default PeopleContainer;
    