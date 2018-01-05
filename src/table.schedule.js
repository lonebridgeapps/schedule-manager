import React from 'react';
import CardEmployee from './components/card.employee'
import CardShift from './components/card.shift'

var shiftColors = {
    // backgroundColor: '#003d66',
    //color: '#ffffff',
    backgroundColor: '#dedede',
    color: '#000',
    borderLeft: '5px solid #003d66'
}

var unavailableColors = {
    backgroundColor:'#fff',
    color: '#dedede',
}

var availableColors = {
    backgroundColor:'#dedede',
    color: '#000000',
}

const TableSchedules = (props) => {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Staff</th>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                    </tr>
                    <tr>
                        <td>
                            <div className="card--text-sub">Scheduled:0 / Total:0</div>
                        </td>
                        <td>
                            <div className="card--text-sub">0 / 0</div>
                        </td>
                        <td>
                            <div className="card--text-sub">0 / 0</div>
                        </td>
                        <td>
                            <div className="card--text-sub">0 / 0</div>
                        </td>
                        <td>
                            <div className="card--text-sub">0 / 0</div>
                        </td>
                        <td>
                            <div className="card--text-sub">0 / 0</div>
                        </td>
                        <td>
                            <div className="card--text-sub">0 / 0</div>
                        </td>
                        <td>
                            <div className="card--text-sub">0 / 0</div>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(props.schedule).map(key => {
                        return <tr key={key}>
                                <td>
                                    <CardEmployee 
                                        name={props.schedule[key].profile.name} 
                                        type={props.schedule[key].profile.email} 
                                        icon="Icon"/>   
                                </td>
                                <td>
                                    <CardShift 
                                        name="10am" 
                                        details="server" 
                                        section="1"
                                        icon=""
                                        colors={shiftColors}/>
                                </td>
                                <td>
                                    <CardShift  
                                        name="Unavailable" 
                                        section="N/A" 
                                        colors={unavailableColors} 
                                        details="extra notes" />
                                </td>
                                <td>
                                    <CardShift  
                                        name="Available" 
                                        details="N/A" 
                                        section="N/A" 
                                        colors={availableColors}  />
                                </td>
                                <td>
                                    <CardShift  
                                        name="Available" 
                                        details="N/A" 
                                        section="N/A" 
                                        colors={availableColors} />
                                </td>
                                <td>
                                    <CardShift  
                                        name="Available" 
                                        details="N/A" 
                                        section="N/A" 
                                        colors={availableColors} />
                                </td>
                                <td>
                                    <CardShift  
                                        name="Available" 
                                        details="N/A" 
                                        section="N/A" 
                                        colors={availableColors}  />
                                </td>
                                <td>
                                    <CardShift  
                                        name="Available" 
                                        details="N/A" 
                                        section="N/A" 
                                        colors={availableColors} />
                                </td>
                                {/* <td>
                                    <div>{props.schedule[key].d5.name}</div>
                                    <div>{props.schedule[key].d5.start} - {props.schedule[key].d5.end}</div>
                                </td>
                                <td>
                                    <div>{props.schedule[key].d6.name}</div>
                                </td> */}
                            </tr>
                    })}
                </tbody>
            </table>

        </div>
    );
}

export default TableSchedules;