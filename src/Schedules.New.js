import React, { Component } from 'react';

import TableSchedules from './table.schedule';

class SchedulesNew extends Component {

  handleShiftSelectChange = (event, index, value) => {
      console.log("event", event.target.value);
      console.log("index", index);
      console.log("value", value);
  }

  render() {
    return (
        <div>
            <h2>Create Schedule</h2>
        
            <div className="container">
                <div className="panel">
                    <button type="button" name="btnSaveSchedule" className="button panel-button--left">Save Schedule</button>
                </div> 

                <div className="panel">
                    <TableSchedules 
                        people={this.state.people} 
                        shifts={this.state.shifts} 
                        schedule={'nothing'}
                        handleShiftSelectChange={this.handleShiftSelectChange} />
                </div>
            </div>
        </div>
    )
  }
}

export default SchedulesNew;
