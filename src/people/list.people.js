import React from 'react';

const ListPeople = (props) => {
    return(
        <div>
            <ul>
                {Object.keys(props.people).map(key => {
                     return <li key = {key}>
                                {props.people[key].name}<br/>
                                {props.people[key].email} 
                            </li>
                    })}
            </ul>
        </div>
    );
}

export default ListPeople;
