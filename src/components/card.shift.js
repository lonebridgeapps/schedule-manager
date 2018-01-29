import React from 'react';

var details = {
    width: '75px',
};

const CardShift = (props) => {
    return(
        <div className="card--shift" style={props.colors}>
            <div className="card--shift--content">
                
                <div className="left-content" style={details}>
                    <div className="card--text-main">{props.name}</div>
                    {/* <div className="card--text-sub">{props.details}</div> */}
                </div>

                <div className="left-content">
                    <div className="card--tag">
                        <div className="card--text-sub">{props.section}</div>
                    </div>
                </div>
                
            </div>
        </div>  
    );
}

export default CardShift;