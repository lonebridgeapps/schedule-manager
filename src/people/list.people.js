import React from 'react';

import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';

const ListPeople = (props) => {
    return(
        <div>
            <List>
                {Object.keys(props.people).map(key => {
                     return <ListItem key = {key}
                            primaryText={props.people[key].name}
                            secondaryText={props.people[key].email} 
                            leftAvatar={<Avatar src= {props.people[key].avatar_url} />} 
                        />
                    })}
                
            </List>
        </div>
    );
}

export default ListPeople;
