import React, { Component } from 'react';

import fire from './fire';

import ScheduleContainer from './container.schedule';

class Schedules extends Component {

  state = {
    people: [],
    shifts: [],
    isDrawerOpen: false,
  };

  componentDidMount = () => {
    console.log('schedule component did mount called');
    this.getFirebasePeople();
  }

  getFirebaseShifts = () => {
    const noData = {"testKey": {name: "no shifts available"}};
    fire.database().ref().child('shifts/').on('value', snapshot => {
      let shiftsData = (snapshot.val() !== null) ? snapshot.val() : noData;
      this.setState({shifts: shiftsData}, this.buildSchedule(shiftsData));
    })
  }

  getFirebasePeople = () => {
    const noData = {"testKey": {name: "no people available"}};
    fire.database().ref().child('people/').on('value', snapshot => {
      let peopleData = (snapshot.val() !== null) ? snapshot.val() : noData;
      this.setState({people: peopleData}, this.getFirebaseShifts());
    })
  }

  buildSchedule = (shifts) => {
    var weekStartDate = new Date();
    // var shifts = this.state.shifts;

    //generate shift availability
    var arrShifts = [];
    console.log(shifts);
    {Object.keys(shifts).map(key => {
        return arrShifts.push(shifts[key]);
    })}
    console.log(arrShifts);

    {Object.keys(this.state.people).map(key => {
        return this.state.people[key].shifts = arrShifts;
    })}

    console.log('people obj', this.state.people);
  }

  handleShiftSelectChange = (event, index, value) => {
      console.log("event", event);
      console.log("index", index);
      console.log("value", value);
  }

  render() {
    return (
        <ScheduleContainer
          people={this.state.people} 
          shifts={this.state.shifts}
          handleShiftSelectChange={this.handleShiftSelectChange.bind(this)}
        />
    )
  }
}

export default Schedules;
