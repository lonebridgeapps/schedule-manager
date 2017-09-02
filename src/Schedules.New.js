import React, { Component } from 'react';

import fire from './fire';

import TableSchedules from './table.schedule';

class SchedulesNew extends Component {

  state = {
    people: [],
    shifts: [],
    isDrawerOpen: false,
  };

  componentDidMount = () => {
    console.log('schedule component did mount called');
    this.getFirebasePeople();
    this.getFirebaseShifts();
  }

  getFirebaseShifts = () => {
    const noData = {"testKey": {name: "no shifts available"}};
    fire.database().ref().child('shifts/').on('value', snapshot => {
      let shiftsData = (snapshot.val() !== null) ? snapshot.val() : noData;
      this.setState({shifts: shiftsData});
    })
  }

  getFirebasePeople = () => {
    const noData = {"testKey": {name: "no people available"}};
    fire.database().ref().child('people/').on('value', snapshot => {
      let peopleData = (snapshot.val() !== null) ? snapshot.val() : noData;
      this.setState({people: peopleData});
    })
  }

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
                        handleShiftSelectChange={this.handleShiftSelectChange} />
                </div>
            </div>
        </div>
    )
  }
}

export default SchedulesNew;
