import React, { Component } from 'react';
import classes from './Person.css';


class Person extends Component {

  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount', this.props)
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount', this.props)
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
  }



  render() {

    console.log('[Person.js] Inside render', this.props)

    return (
      <div className={classes.Person}>
        <p onClick={ this.props.click }>I'm { this.props.name } and I'm { this.props.age } years old</p>
        <p>{this.props.children}</p>
        <input type="text"  onChange={ this.props.changed } value={ this.props.name } />
      </div>
    );
  }
} 

export default Person;