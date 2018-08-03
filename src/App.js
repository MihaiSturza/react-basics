import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Mimi', age: 40 },
      {name: 'Sebi', age: 42 },
      {name: 'Lili', age: 39 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
   //DON'T DO THIS:  this.state.persons[0].name = 'Mihaita';
   this.setState({
    persons: [
      {name: newName, age: 40 },
      {name: 'Sebi', age: 42 },
      {name: 'Lili', age: 28 }
    ]
   })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Mimi', age: 40 },
        {name: event.target.value, age: 42 },
        {name: 'Lili', age: 28 }
      ]
     })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow}); 
  }

  render() {
    const style = {
      backgroundColor: 'white',
      color: 'black',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">
          Learn React Basics
        </p>
        </header>
        <button
          style={style} 
          onClick={ this.togglePersonsHandler }>Show names</button> 
          { this.state.showPersons ?
          <div>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hobby: music</Person>
        <Person 
            name={ this.state.persons[1].name } 
            age={ this.state.persons[1].age } 
            click={ this.switchNameHandler.bind(this, 'Mrenuta') }
            changed={ this.nameChangedHandler } />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} ></Person>
          </div> : null}

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h2', null, 'Test in progres...'));
  }
}

export default App;
