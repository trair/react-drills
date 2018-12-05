// import React, { Component } from 'react';
// // import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       list: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
//       input: '',
//     }
//   }

//   changeInput(evt) {
//     this.setState({
//       input: evt.target.value
//     })
//   }

//   render() {
//     let filteredList = this.state.list.filter(el => (
//       el.includes(this.state.input)
//     )).map((el, i) => (
//       <h2 key={i}>{el}</h2>
//     ))

//     return (
//       <div className="App">
//         <input onChange={(evt) => this.changeInput(evt)} />
//         <br />
//         {filteredList}
//         {/* {filteredList.map((el, i) => (                          //if I didn't chain the map function to filteredList, this code would work as well
//           <h2 key={i}>{el}</h2>
//         ))} */}
//       </div>
//     );
//   }
// }

// export default App;

// Second Time
import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
      input: '',
    }
  }

  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }

  render() {
    let filteredList = this.state.list
      .filter((e) => (e.includes(this.state.input)))
      .map((e, i) => (<h2 key={i}>{e}</h2>))
    return (
      <div className="App">
        <input onChange={e => this.handleChange('input', e.target.value)} />
        {filteredList}
      </div>
    )
  }
}

export default App