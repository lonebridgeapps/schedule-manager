import React, { Component } from 'react';
import fire from './fire';

import TableSchedules from './table.schedule';

class ScheduleCreate extends Component {

    state = {
        people: [],
        shifts: [],
        schedule: [],
        isDrawerOpen: false,
        timeOptions: {
            hours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            minutes: [0, 15, 30, 45],
            timespan: ['AM', 'PM'],
        },
    };

    componentDidMount(){
        this.getFirebasePeople();
        this.getFirebaseShifts();
    }

    createEmptySchedule = (peopleObj) => {
        var blankDayTemplate =  {
            "key":"", 
            "name":"none", 
            "nickname":"", 
            "hours":0, 
            "start": "", 
            "end":""
        };

        for(var key in this.state.people){
            if(!this.state.people.hasOwnProperty(key)) continue;

            console.log(key);

            var obj = this.state.people[key];

            var item = {"profile": obj,
                "d0": blankDayTemplate,
                "d1": blankDayTemplate,
                "d2": blankDayTemplate,
                "d3": blankDayTemplate,
                "d4": blankDayTemplate,
                "d5": blankDayTemplate,
                "d6": blankDayTemplate,
            };
            this.state.schedule.push(item);
        }
        
    }

    getFirebasePeople = () => {
        const noData = {"testKey": {name: "no people available"}};
        fire.database().ref().child('people/').on('value', snapshot => {
        let peopleData = (snapshot.val() !== null) ? snapshot.val() : noData;
        this.setState({people: peopleData});

        this.createEmptySchedule(peopleData);
        
        console.log("people", this.state.people);
        console.log("schedule", this.state.schedule);
        })
    }

    getFirebaseShifts = () => {
        const noData = {"testKey": {name: "no shifts available"}};
        fire.database().ref().child('shifts/').on('value', snapshot => {
        let shiftsData = (snapshot.val() !== null) ? snapshot.val() : noData;
        this.setState({shifts: shiftsData});
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
                    <button type="button" name="btnSaveSchedule" className="button panel-button--right">Save</button>
                    <button type="button" name="btnPrintSchedule" className="button panel-button--right">Print</button>
                </div> 

                <div className="panel">
                    <TableSchedules 
                        people={this.state.people} 
                        shifts={this.state.shifts} 
                        schedule={this.state.schedule}
                        timeOptions={this.state.timeOptions}
                        handleShiftSelectChange={this.handleShiftSelectChange} />
                </div>
            </div>
        </div>
    )
  }
}

export default ScheduleCreate;
