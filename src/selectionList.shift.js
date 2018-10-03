import React from 'react';
import './styles/selectionList.css';

const SelectionList = (props) => {

    return(
        <button type="button" 
            value={props.shiftName}
            className="selectionList-button">

            <ul className="selectionList-list">
                {Object.keys(props.shifts).map(key => {
                    return <li key={key}>
                        <a onClick={props.handleShiftSelectChange}>
                            {props.shifts[key].nickname}
                        </a>
                    </li>
                })}
            </ul>
    );
};

export default SelectionList;