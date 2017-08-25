import React from 'react';
import '../layout.css';
import './people.css';

import FormPeople from './form.people';
import ListPeople from './list.people';

const PeopleContainer = (props) =>{
    return(
        <div>
            <h2>Manage People</h2>

            <div className="container">

                <div className="right-content">
                    <ListPeople people={props.people} />
                </div>
                
                <div className="content">
                    <FormPeople onSubmit={this.insertPerson} />
                </div>

            </div>
        </div>
    );
}

export default PeopleContainer;
    