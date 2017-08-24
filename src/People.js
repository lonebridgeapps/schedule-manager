import React, { Component } from 'react';
import './App.css';
import './layout.css';
import fire from './fire';

import PeopleContainer from './people/container.people';

class People extends Component {

  state = {
  	cards: [],
    person: [],
    people: [],
    shifts: [],
    isDrawerOpen: false,
  };

  componentDidMount = () => {
    console.log('component did mount called');
    this.getFirebasePeople();
  }

  getFirebasePeople = () => {
    const noData = {"testKey": {name: "no people available"}};
    fire.database().ref().child('people/').on('value', snapshot => {
      let peopleData = (snapshot.val() !== null) ? snapshot.val() : noData;
      this.setState({people: peopleData});
      console.log(this.state.people)
    })
  };

  insertPerson = (personInfo) => {
    this.setState(prevState => ({
      cards: prevState.card.concat(personInfo)
    }));
  };


  render() {
    return (
        <PeopleContainer 
          people={this.state.people} 
        />
    )
  }
}

export default People;
