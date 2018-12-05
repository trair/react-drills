import React, {Component} from 'react'
import './App.css'

import axios from 'axios'

class App extends Component {
  state = {
    bulbasaur: ''
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/1')
    .then(response => {
      this.setState({
        bulbasaur: response.data
      })
    })
  }

  render() {
    return(
      <div className="App">
        <h1>Name: {this.state.bulbasaur.name}</h1>
        <h2>Number: {this.state.bulbasaur.order}</h2>
        <h2>Height: {this.state.bulbasaur.name}</h2>
        <h2>Eye Color: {this.state.bulbasaur.name}</h2>
      </div>
    )
  }
}

export default App