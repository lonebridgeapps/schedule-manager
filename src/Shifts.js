import React, { Component } from 'react';
import './App.css';
import './layout.css';

import fire from './fire';

import ShiftContainer from './container.shift';

class Shifts extends Component {

  state = {
    shifts: [],
    isDrawerOpen: false
  };

  componentDidMount = () => {
    this.getFirebaseShifts();
  }

  getFirebaseShifts = () => {
    const noData = {"testKey": {name: "no shifts available"}};
    fire.database().ref().child('shifts/').on('value', snapshot => {
      let shiftsData = (snapshot.val() !== null) ? snapshot.val() : noData;
      this.setState({shifts: shiftsData});
    })
  };

  openDrawer = (event) => {
    event.preventDefault();
    this.setState({isDrawerOpen: true});
  }

  closeDrawer = (event) => {
    event.preventDefault();
    this.setState({isDrawerOpen: false});
  }

  render() {
    return (
        <ShiftContainer 
          shifts={this.state.shifts} 
          isDrawerOpen={this.state.isDrawerOpen}
          openDrawer={this.openDrawer.bind(this)}
          closeDrawer={this.closeDrawer.bind(this)}
        />
    )
  }
}

export default Shifts;
