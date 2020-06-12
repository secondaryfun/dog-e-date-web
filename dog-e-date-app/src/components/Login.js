import React, { Component } from 'react';
import './Login.css'


export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    };


    render() {
        return (
            <div className="form-wrapper">
                <h3 className="form-type">Enter Information to Login</h3>
                <form onSubmit={this.props.handleSubmit} noValidate >
                    <ul>
                        <li className="form-li" >
                            <label htmlFor="username">Enter Username</label>
                            <input type="text" id="username" name="username" required placeholder="Username" />
                        </li>
                        <li className="form-li" >
                            <label htmlFor="password">Enter Password</label>
                            <input type="text" id="password" name="password" required placeholder="Password" />
                        </li>

                        <ul>
                            <button className="form-button" type="submit">Login</button>
                            {this.props.inputError ? <p>Submit Error, Please check your form for required (*) items.</p> : <p>* Required</p>}

                        </ul>
                    </ul>
                </form>
            </div>
        )

    }
}
