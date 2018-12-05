// import React, {Component} from 'react'

// class NewTask extends Component {
//     state = {
//         userInput: ''
//     }

//     handleChange(prop, val) {
//         this.setState({
//             [prop]: val
//         })
//     }

//     handleAdd() {
//         this.props.add(this.state.userInput)
//         this.setState({
//             userInput: ''
//         })
//     }

//     render() {
//         return(
//             <div>
//                 <input onChange={e => this.handleChange('userInput', e.target.value)} value={this.state.userInput} />
//                 <button onClick={() => this.handleAdd()}>Add</button>
//             </div>
//         )
//     }
// }

// export default NewTask


// Round 2
import React, {Component} from 'react'

// Add a new item to [task] array on App component

export default class NewTask extends Component {
    constructor() {
        super()
        this.state = {
            userInput: ''
        }
    }

    handleChange(prop, evt) {
        this.setState({
            [prop]: evt.target.value
        })
    }

    handleClick() {
        this.props.addFn(this.state.userInput)
        this.setState({
            userInput: ''
        })
    }

    render() {
        return(
            <div>
                <input onChange={evt => this.handleChange('userInput', evt)} value={this.state.userInput} />
                <button onClick={() => this.handleClick()}>Add</button>
            </div>
        )
    }
}