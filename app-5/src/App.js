// import React, { Component } from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import Image from './Componenets/Image'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Image url="https://http.cat/100" />
//       </div>
//     );
//   }
// }

// export default App;

// Second Try
import React, {Component} from 'react'
import Image from './Componenets/Image'
import './App.css'

class App extends Component {
  render() {
    return(
      <div className="App">
        <Image url="https://http.cat/100" alt="cat" />
      </div>
    )
  }
}

export default App