import React, { Component } from 'react';
import './Login.css'


export default class AddUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputError: false,
            formResults: "",
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
        const url = "https://dog-e-date.herokuapp.com/user"
        fetch(url, {
            method: "post",
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
        const dogSizes = ["S", "M", "L", "XL"]
        return (
            <div className="form-wrapper">
                <h3 className="form-type">Add a new Dog</h3>
                <form onSubmit={this.handleSubmit} noValidate >
                    <input type="hidden" name="parent" value="PARENT-ID-PLACEHOLDER" />
                    <ul>
                        <li className="form-li" >
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" id="firstName" name="firstName" min="0" placeholder="First Name" />
                        </li>
                        <li className="form-li" >
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" id="lastName" name="lastName" required placeholder="Last Name" />
                        </li>
                        <li className="form-li" >
                            <label htmlFor="username">Username:</label>
                            <input type="number" id="username" name="username" placeholder="Username" />
                        </li>
                        <li className="form-li" >
                            <label htmlFor="info">Describe your dog:</label>
                            <textarea id="info" name="breed" rows="6" cols="50" placeholder="Favorite toy, quirks, special smells..."></textarea>
                        </li>
                        <li className="form-li" >
                            <label htmlFor="size">Size:</label>
                            <select type="text" id="size" name="size" placeholder="Password" >
                                {
                                    dogSizes.map(size => <option value={size}>{size}</option>)
                                }

                            </select>
                        </li>
                        <li className="form-li" >
                            <label htmlFor="image">Enter Hosted Image URL:</label>
                            <input type="text" id="image" name="image" require placeholder="http://mydog.jpg" defaultValue="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg" />
                        </li>

                        <li>
                            <button className="form-button" type="submit">Add Dog</button>
                            {this.state.inputError ? <p>Submit Error, Please check your form for required (*) items.</p> : <p>* Required</p>}
                            {this.state.formResults ? <p>{this.state.formResults.title} Successfully Created!</p> : <p></p>}

                        </li>
                    </ul>
                </form>
            </div>
        )

    }
}
