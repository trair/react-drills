// import React, { Component } from 'react'
// import NewTask from './Components/NewTask'
// import List from './Components/List'
// import './App.css';

// class App extends Component {
//   state = {
//     list: [],
//   }

//   addNewTask = (task) => {
//     let newArray = this.state.list.slice()
//     newArray.push(task)
//     this.setState({
//       list: newArray
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <NewTask add={this.addNewTask} />
//         <List tasks={this.state.list} />
//       </div>
//     )
//   }
// }

// export default App


// Round 2
import React, { Component } from 'react'
import './App.css'
import NewTask from './Components/NewTask'
import List from './Components/List'

class App extends Component {
  constructor() {
    super()
    this.state = {
      task: []
    }
    this.addToList = this.addToList.bind(this)
  }

  addToList(item) {
    let newList = this.state.task.slice()
    newList.push(item)
    this.setState({
      task: newList
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My To-do List:</h1>
        <NewTask
          addFn={this.addToList}
        />
        <List
          list={this.state.task}
        />
      </div>
    )
  }
}

export default App