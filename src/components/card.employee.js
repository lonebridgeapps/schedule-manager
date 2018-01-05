import React from 'react';

const CardEmployee = (props) => {
    return(
        <div className="card--employee-info">
            <div className="left-content">
                <div className="card--employee-info--image">{props.icon}</div>
            </div>
            <div className="left-content">
                <div className="card--employee-info--content">
                    <div className="card--text-main">{props.name}</div>
                    <div className="card--text-sub">{props.type}</div>
                </div>
            </div>
        </div>  
    );
}

export default CardEmployee;