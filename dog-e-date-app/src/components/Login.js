import React, { Component } from 'react';
import './Login.css'


export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputError: false,
            userCredentials: {},
        }
    };

    stringifyFormData = (data) => {
        const data1 = {};
        let formKey
        for (let key of data.keys()) {
            formKey = `${key}`
            data1[formKey] = data.get(key);
        }
        return data1
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let data = new FormData(e.target)
        data = JSON.stringify(this.stringifyFormData(data))
        if (!e.target.checkValidity()) {
            this.setState({ inputError: true })
            return;
        }
        console.log(data)
        const url = "https://dog-e-date.herokuapp.com/user/" + data.username
        fetch(url).then(res => res.json()).then(res => {
            console.log(res)
            this.setState({ userCredentials: res, submitFormSuccessful: true })
        }).catch(err => {
            console.log(err)
            this.setState({ submitFormSuccessful: false })
        })
    }
    render() {
        console.log(this.state.formResults)
        return (
            <div className="form-wrapper">
                <h3 className="form-type">Enter Information to Login</h3>
                <form onSubmit={this.handleSubmit} noValidate >
                    <ul>
                        <li className="form-li" >
                            <label htmlFor="username">Enter Username</label>
                            <input type="text" id="username" name="username" required placeholder="Username" />
                        </li>
                        <li className="form-li" >
                            <label htmlFor="password">Enter Password</label>
                            <input type="text" id="password" name="password" required placeholder="Password" />
                        </li>

                        <li>
                            <button className="form-button" type="submit">Login</button>
                            {this.state.inputError ? <p>Submit Error, Please check your form for required (*) items.</p> : <p>* Required</p>}

                        </li>
                    </ul>
                </form>
            </div>
        )

    }
}
