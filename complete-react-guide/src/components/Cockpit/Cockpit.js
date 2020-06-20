import React, { useEffect } from 'react'
import './Cockpit.css'

const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        setTimeout(() => {
            alert('Saved data to cloud')
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect')
        }
    }, [])

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect')
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect')
        }
    })

    const classes = [];
    let btnClass = '';
  if (props.showPersons) {
      btnClass = 'Red'
  }
  if (props.personsLength <= 2) {
      classes.push('red')
  }

  if (props.personsLength <= 1) {
      classes.push('bold')
  }
    return (
        <div className='Cockpit'>
        <h1>{props.appTitle}</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={props.clicked} >Toggle Persons</button>
        </div>
    )
}

export default React.memo(Cockpit)