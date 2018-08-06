import React from 'react';
import classes from './Cockpit.css';
import logo from '../../logo.svg';

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass='';

    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if(props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <header className={classes.AppHeader}>
              <img src={logo} className={classes.AppLogo} alt="logo" />
            <p className={classes.AppIntro}>
              Learn React Basics
            </p>
            </header>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button
              className={btnClass}
              onClick={ props.clicked }>Show names</button>
        </div>
    );
}

export default cockpit;