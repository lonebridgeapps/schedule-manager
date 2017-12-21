import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as peopleActions from './actions/peopleActions.js';
import { bindActionCreators } from 'redux';

import './styles/App.css';
import './styles/layout.css';
import './styles/people.css';

// import fire from './fire';

// import PeopleContainer from './people/container.people';

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
    //this.getFirebasePeople();
  }

  // getFirebasePeople = () => {
  //   const noData = {"testKey": {name: "no people available"}};
  //   fire.database().ref().child('people/').on('value', snapshot => {
  //     let peopleData = (snapshot.val() !== null) ? snapshot.val() : noData;
  //     this.setState({people: peopleData});
  //     console.log(this.state.people)
  //   })
  // };

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
      <div>
        <h2>Manage People</h2>

        <div className="container">
            <div className="content-60 panel">
                {/*<TablePeople people={props.people} />*/}
                <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Job Type</th>
                        <th>Start Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                  {this.props.people.map(this.personRow)}
                    {/*{Object.keys(props.people).map(key => {
                     return <tr key = {key}>
                                <td>{props.people[key].name}</td>
                                <td>{props.people[key].email}</td>
                                <td>{props.people[key].job}</td>
                                <td>{props.people[key].start}</td>
                                <td><input type="button" className="button" value="Delete"/></td>
                            </tr>
                    })}*/}
                    
                </tbody>
            </table>
            </div>
            <div className="content-30 panel">
                {/*<FormPeople onSubmit={this.insertPerson} />*/}
                <div className="App-form App-form__people-container">
                <form className="App-form">

                  <div className="App-form__input-field">
                    <label htmlFor="name" className="text-label">Name</label>
                    <input
                      name="name"
                      type="text"
                      className="text-input"
                      placeholder="Name"
                      value={this.state.person.name}
                      onChange={this.handleNameChange}
                      required
                    />
                  </div>

                  <div className="App-form__input-field">
                    <label htmlFor="email" className="text-label">Email</label>
                    <input
                      name="email"
                      type="email"
                      className="text-input"
                      placeholder="Email"
                      value={this.state.person.email}
                      onChange={this.handleEmailChange}
                      required
                    />
                  </div>

                  <div className="App-form__input-field">
                    <label htmlFor="job" className="text-label">Job Title</label>
                    <select
                      name="job"
                      className="text-input"
                      value={this.state.person.job}
                      onChange={this.handleSelectChange}
                    >
                      <option value={1} label="Server" />
                      <option value={2} label="Bartender" />
                      <option value={3} label="Hostess" />
                    </select>
                  </div>

                  <div className="App-form__input-field">
                    <label htmlFor="startDate" className="text-label">Start Date</label>
                    <input
                      name="startDate"
                      type="date"
                      className="text-input"
                      placeholder="Start Date"
                      value={this.state.person.startDate}
                      onChange={this.handleStartChange}
                    />
                  </div>

                  <button type="button" onClick={this.createPerson} className="button">Add Person</button>

                  <p className="App-form__validation-messaging"></p>
                </form>
              </div>
            </div>
        </div>

      </div>


        // <PeopleContainer 
        //   people={this.state.people} 
        // />
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
