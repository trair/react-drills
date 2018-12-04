import React, {Component} from 'react'

class NewTask extends Component {
    state = {
        userInput: ''
    }

    handleChange(prop, val) {
        this.setState({
            [prop]: val
        })
    }

    handleAdd() {
        this.props.add(this.state.userInput)
        this.setState({
            userInput: ''
        })
    }

    render() {
        return(
            <div>
                <input onChange={e => this.handleChange('userInput', e.target.value)} value={this.state.userInput} />
                <button onClick={() => this.handleAdd()}>Add</button>
            </div>
        )
    }
}

export default NewTask