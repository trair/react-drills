import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        username: '',
        password: '',
    }

    handleChange(prop, val) {
        this.setState({
            [prop]: val
        })
    }

    login() {
        alert(`Username: ${this.state.username} | Password: ${this.state.password}`)
    }

    render() {
        return (
            <div>
                <input onChange={(e) => this.handleChange('username', e.target.value)} placeholder="Username" />
                <input onChange={(e) => this.handleChange('password', e.target.value)} placeholder="Password" />
                <button onClick={() => this.login()}>Login</button>
            </div>
        )
    }
}