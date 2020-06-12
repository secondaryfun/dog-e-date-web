import React, { Component } from 'react';
import './Login.css';
import GetFormData from '../FormData'


export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
        }
    };
    componentDidMount() {
        this.getUserData()
      }
      getUserData = () => {
        let url = "https://dog-e-date.herokuapp.com/user/" + "toddpacker"
    
        fetch(url, {
          headers: {
            Accept: "application/json",
          }
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            this.setState({ user: data });
          })
          .catch(err => {
            console.log("Error", err);
          });
      }
    
      handleLoginSubmit = (e) => {
        e.preventDefault()
        let data = GetFormData(e)
    
        if (!e.target.checkValidity()) {
          this.setState({ inputError: true })
          return;
        }
        console.log(data.username)
        const url = "https://dog-e-date.herokuapp.com/user/" + "toddpacker"
        fetch(url).then(res => res.json()).then(res => {
          console.log(res)
          this.setState({ user: res, loginAttempt: data, submitFormSuccessful: true })
        }).catch(err => {
          console.log(err)
          this.setState({ submitFormSuccessful: false })
        })
      }
    


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
