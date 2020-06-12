import React, { Component } from 'react';
import './Login.css'


export default class AddUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputError: false,
            formResults: "",
            userData: {},
        }
    };
    componentDidMount() {
        this.getUserData()
    }
    getUserData = () => {
        console.log(this.props.user)
        let url = "https://dog-e-date.herokuapp.com/user/" + this.props.user.username

        fetch(url, {
            headers: {
                Accept: "application/json",
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({ userData: data });
            })
            .catch(err => {
                console.log("Error", err);
            });
    }

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
        const url = "https://dog-e-date.herokuapp.com/user"
        fetch(url, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        }).then(res => res.json()).then(res => {
            console.log(res)
            this.setState({ formResults: res, submitFormSuccessful: true })
        }).catch(err => {
            console.log(err)
            this.setState({ formResults: err, submitFormSuccessful: false })
        })
    }
    render() {
        console.log(this.state.userData)
        let user
        this.state.userData ? user = this.state.userData : user = ""
        return (
            <div className="form-wrapper">
                <h3 className="form-type">Create an Account</h3>
                <form onSubmit={this.handleSubmit} noValidate >
                    <input type="hidden" name="parent" value="PARENT-ID-PLACEHOLDER" />
                    <ul>
                        <li className="form-li" >
                            <label htmlFor="email">Email:</label>
                            <input type="text" id="email" name="email" placeholder={user ? user.email : ""} defaultValue={user ? user.email : ""} />
                        </li>
                        <li className="form-li" >
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" name="username" required placeholder={user ? user.username : ""} defaultValue={user ? user.username : ""} />
                        </li>
                        <li className="form-li" >
                            <label htmlFor="newPassword">New Password:</label>
                            <input type="text" id="newPassword" name="password" placeholder="Enter New Password" />
                        </li>
                        <li className="form-li" >
                            <label htmlFor="checkpassword">Re-enter New Password:</label>
                            <input type="text" id="checkpassword" name="checkpassword" placeholder="Enter New Password" />
                        </li>
                        <li className="form-li" >
                            <label htmlFor="password">Old Password:</label>
                            <input type="text" id="password" name="password" placeholder="Enter old password" />
                        </li>
                        {/*<li className="form-li" >
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" id="firstName" name="firstName" min="0" placeholder="First Name" />
                        </li>
                        <li className="form-li" >
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" id="lastName" name="lastName" placeholder="Last Name" />
                        </li>
                        <li className="form-li" >
                            <label htmlFor="line1">Address Line 1:</label>
                            <input type="text" id="line1" name="line1" placeholder="1234 Street Ave." />
                        </li>
                        <li className="form-li" >
                            <label htmlFor="line2">Address Line 2:</label>
                            <input type="text" id="line2" name="line2" placeholder="Ste. 103" />
                        </li>
                        <li className="form-li" >
                            <label htmlFor="line3">Address Line 3:</label>
                            <input type="text" id="line3" name="line3" placeholder="" />
                        </li>
                        <li className="form-li" >
                            <label htmlFor="city">City:</label>
                            <input type="text" id="city" name="city" placeholder="City" />
                        </li>
                        <li className="form-li" >
                            <label htmlFor="state">State:</label>
                            <input type="text" id="state" name="state" placeholder="DC" />
                        </li>
                        <li className="form-li" >
                            <label htmlFor="country">Country:</label>
                            <input type="text" id="country" name="country" placeholder="US" />
                        </li>
                        <li className="form-li" >
                            <label htmlFor="zipcode">Zipcode:</label>
                            <input type="text" id="zipcode" name="zipcode" placeholder="12345" />
                        </li> */}
                        <li className="form-li" >
                            <label htmlFor="image">Enter Hosted Profile Pic URL:</label>
                            <input type="text" id="image" name="image" require placeholder="http://mydog.jpg" defaultValue="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg" />
                        </li>

                        <ul>
                            <button className="form-button" type="submit">Sign Up</button>
                            {this.state.inputError ? <p>Submit Error, Please check your form for required (*) items.</p> : <p>* Required</p>}
                            {this.state.formResults ? <p>{this.state.formResults.title} Successfully Created!</p> : <p></p>}

                        </ul>
                    </ul>
                </form>
            </div>
        )

    }
}
