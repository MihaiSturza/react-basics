import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Mimi', age: 20 },
      {name: 'Sebi', age: 42 },
      {name: 'Lili', age: 39 }
    ]
  }

  switchNameHandler = () => {
   //DON'T DO THIS:  this.state.persons[0].name = 'Mihaita';
   this.setState({
    persons: [{name: 'Mimisor', age: 40 }]
    
   })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">
          Learn React Basics
        </p>
        </header>
        <button onClick={ this.switchNameHandler }>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hobby: music</Person>
        <Person name='Sebi' age='42' />
        <Person name='Lili' age='39' ></Person>

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h2', null, 'Test in progres...'));
  }
}

export default App;
