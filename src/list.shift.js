import React from 'react';

import {List, ListItem} from 'material-ui/List';

const ListShift = (props) => {
    return(
        <div>
            <List>
                {Object.keys(props.shifts).map(key => {
                     return <ListItem key = {key}
                            primaryText={props.shifts[key].name}
                            secondaryText={props.shifts[key].nickname} 
                        />
                    })}
                
            </List>
        </div>
    );
}

export default ListShift;
