import React from 'react';
import AppBar from 'material-ui/AppBar';

const style = {
    bar: {
        width: '100%'
    }
}

const HeaderBar = (props) => {
  return(
        <AppBar style={style.bar}
            title={props.title}
            showMenuIconButton={props.showIcon}
        />
  );
}

export default HeaderBar;