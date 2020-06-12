import React, { Component } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import AddDog from "./components/AddDog";
import Login from "./components/Login.js";
import DogPark from "./components/DogPark.js";
import AddUser from "./components/AddUser.js"
import EditUser from "./components/EditUser.js"
import Barks from "./components/Barks.js"
import GetFormData from './FormData'
import Kennel from "./components/Kennel.js"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: [],
      dogList: [],
      inputError: false,
      user: {},
      loginAttempt: {}
    }
  }
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
    const url = "https://dog-e-date.herokuapp.com/user/" + data.username
    fetch(url).then(res => res.json()).then(res => {
      console.log(res)
      this.setState({ user: res, loginAttempt: data, submitFormSuccessful: true })
    }).catch(err => {
      console.log(err)
      this.setState({ submitFormSuccessful: false })
    })
  }

  // checkPassword = () {
  //   formPassword = this.state.loginAttempt.checkPassword
  //   userPass = this.state.user.
  // }

  render() {
    console.log(this.state.user)
    return (
      <div className="body-wrapper">
        <div className="body-overlay" >
          <header className="header" >
            <span className="header__logo">
              <h2>Dog-E-Date</h2>
            </span>
          </header>
          <div className="container">
            <h1>WELCOME TO YOUR NEXT DOG-E-DATE</h1>
            <div className="button-container">
              <Link to={"/dog-park/"} style={this.state.linkStyle} >
                <button className="nav-button">DOG PARK</button>
              </Link>

              <Link to={"/kennel/"} style={this.state.linkStyle} >
                <button className="nav-button Page">PROFILE</button>
                <img src={this.state.user.userImage} alt={this.state.user.username} />
              </Link>
              <Link to={"/bark/"} style={this.state.linkStyle} >
                <button className="nav-button Page">BARKS</button>
              </Link>
              <Link to={"/login/"} style={this.state.linkStyle} >
                <button className="nav-button">LOG IN</button>
              </Link>
              <Link to={"/signup/"} style={this.state.linkStyle} >
                <button className="nav-button">SIGN UP</button>
              </Link>
              <Link to={"/add-dog"} style={this.state.linkStyle} >
                <button className="nav-button">ADD DOG</button>
              </Link>
              <Link to={"/update-user"} style={this.state.linkStyle} >
                <button className="nav-button">UPDATE USER</button>
              </Link>
            </div>

            <Route
              path="/login/"
              render={() => (
                <Login handleSubmit={this.handleLoginSubmit} inputError={this.state.inputError} />
              )}
            />

            <Route
              path="/signup/"
              render={() => (
                < AddUser dogList={this.state.dogList} />
              )}
            />
            <Route
              path="/update-user/"
              render={() => (
                < EditUser user={this.state.user} />
              )}
            />
            <Route
              path="/dog-park/"
              render={() => (

                // null
                <DogPark user={this.state.user} />
              )}
            />
            <Route
              path="/kennel/"
              render={() => (

                <Kennel user={this.state.user} />

              )}
            />
            <Route
              path="/bark/"
              render={() => (
                <Barks />
              )}
            />
            <Route
              path="/add-dog/"
              render={() => (
                <AddDog userInfo={this.state.userInfo} />
              )}
            />

          </div>

        </div>
      </div>
    );
  }
}
export default App;
