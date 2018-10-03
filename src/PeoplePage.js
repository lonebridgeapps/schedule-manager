import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as peopleActions from './actions/peopleActions.js';
import { bindActionCreators } from 'redux';

import './styles/App.css';
import './styles/layout.css';
import './styles/people.css';

 import fire from './fire';

import PeopleContainer from './people/container.people';

class PeoplePage extends Component {

  constructor(props, context){
    super(props, context);

    this.state = {
      people: [],
      person: {
        name: '',
        email: '',
        job: 1,
        start: ''
      }
    };

    this.createPerson = this.createPerson.bind(this);
  }

  componentDidMount = () => {
    console.log('people component did mount called');
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

  createPerson = () => {
    this.props.actions.createPerson(this.state.person);
    // this.setState(prevState => ({
    //   cards: prevState.card.concat(personInfo)
    // }));
  };

  personRow = (person, index) => {
    return <tr key = {index}>
        <td>{person.name}</td>
        <td>{person.email}</td>
        <td>{person.job}</td>
        <td>{person.start}</td>
        <td><input type="button" className="button" value="Delete"/></td>
    </tr>
  }

  handleNameChange = (event) => {
    const person = this.state.person;
    person.name = event.target.value;
    this.setState({person: person});
  }

  handleEmailChange = (event) => {
    const person = this.state.person;
    person.email = event.target.value;
    this.setState({person: person});
  }

  handleStartChange = (event) => {
    const person = this.state.person;
    person.start = event.target.value;
    this.setState({person: person});
  }

  handleSelectChange = (event, index, value) => {
    const person = this.state.person;
    person.job = value;
    this.setState({person: person});
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.createPerson();
    // fire.database().ref('people').push({
    //   name: this.state.name,
    //   email: this.state.email,
    //   job: this.state.job
    // });

    //this.setState({ name: '', email: '', job: 1});
  // }

  render() {
    return (
      <PeopleContainer people={this.state.people} />
    )
  }
}

function mapStateToProps(state, ownProps){
  return{
    people: state.people
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(peopleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PeoplePage);
