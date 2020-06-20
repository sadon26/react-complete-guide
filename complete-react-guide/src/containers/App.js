import React, { Component } from 'react';
import './App.css';
import Coins from '../Coins/Coins';
// import ValidationComponent from './ValidationComponent/ValidationComponent';
// import CharComponent from './CharComponent/CharComponent';
import Persons from './../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'



class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
state = {
  persons: [
    { id: 'segfsd', name: "Dayo", age: "24" },
    { id: 'afvsd', name: "Emma", age: "27" },
    { id: 'avadv', name: "Yem", age: "32" }
  ],
  otherState: 'some other value',
  showPersons: false,
  showCockpit: true
}

static getDerivedStateFromProps(props, state) {
  console.log('[App.js] getDerivedStateFromProps', props)
  return state;
}

componentDidMount() {
  console.log('[App.js] componentDidMount')
}
componentDidUpdate() {
  console.log('[App.js] componentDidUpdate');
}

shouldComponentUpdate(nextProps, nextState) {
  console.log('[App.js]  shouldComponentUpdate')
  return true
}


deletePersonHandler = (personIndex) => {
  const persons = [...this.state.persons]
  persons.splice(personIndex, 1)
  this.setState({
    persons: persons
  })
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons
  this.setState({
    showPersons: !doesShow
  })
}

nameChangedHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id
  })

  const person = {...this.state.persons[personIndex]}
  person.name = event.target.value
  const persons = [...this.state.persons]
  persons[personIndex] = person
  this.setState({
    persons: persons
  })
}

render() {
  console.log('[]App.js] render')
  let persons = null;


  if (this.state.showPersons) {
    persons = (
      <Persons persons={this.state.persons}
      clicked={this.deletePersonHandler}
      changed={this.nameChangedHandler}
      />
    )

}

  return (
    <div className="App">
    <button onClick={() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
    <Coins />
    {this.state.showCockpit ? ( <Cockpit 
    appTitle={this.props.appTitle}
    showPersons={this.state.showPersons}
    personsLength={this.state.persons.length}
    clicked={this.togglePersonsHandler}
    /> 
    ) : null}
    {persons}
    </div>
  )
  
}
}

export default App;

/*         <h1>Hey, I'm react</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Switch name</button>
        {persons} */
 /*  state = {
    userInput: ''
  }

  inputLengthHandler = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  deleteCharHandler = (index) => {
    const input = this.state.userInput.split('')
    input.splice(index, 1)
    const updatedInput = input.join('')
    this.setState({
      userInput: updatedInput
    })
  }

  render() {
    const charList = this.state.userInput.split('').map((char, index) => {
      return <CharComponent remove={() => this.deleteCharHandler(index)} character={char} key={index} />
    })
    return (
      <div className="App">
        <Coins />
        <input type="text" onChange={this.inputLengthHandler} value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <p style={{ textAlign: 'center' }}>The length of the input is {this.state.userInput.length}</p>
        <ValidationComponent textLength={this.state.userInput.length} /> <br />
        {charList}
      </div>
    );
  }
} */






