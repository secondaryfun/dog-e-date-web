import React, { Component } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
  // import "bootstrap/dist/css/bootstrap.min.css";
import AddDog from "./components/AddDog";
import Login from "./components/Login.js";
import DogPark from "./components/DogPark.js";
import AddUser from "./components/AddUser.js"
import Barks from "./components/Barks.js"
import GetFormData from './FormData'
import Kennel from "./components/Kennel.js"

let dogList = [
  {
    "_id": "5ee25a4e3389db00042d9499",
    "name": "Spot",
    "parent": "Sue Smith",
    "breed": "Pit Bull",
    "info": "Super Friendly",
    "age": 3,
    "size": "M",
    "__v": 0,
    "image": "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"
  },
  {
    "_id": "5ee25a4e3389db00042d9499",
    "name": "Blue",
    "parent": "Sue Smith",
    "breed": "Pit Bull",
    "info": "Super Friendly",
    "age": 3,
    "size": "M",
    "__v": 0,
    "image": "https://www.washingtonian.com/wp-content/uploads/2018/10/marcus-wallis-471438-unsplash-2048x1536.jpg"
  },
  {
    "_id": "5ee25a4e3389db00042d9499",
    "name": "Pantsless Monkey",
    "parent": "Sue Smith",
    "breed": "Pit Bull",
    "info": "Super Friendly",
    "age": 3,
    "size": "M",
    "__v": 0,
    "image": "https://www.dogbreedinfo.com/images32/MastidoodleMastiffPoodleMixedBreedDogGordon4YearsOld.jpg"
  },
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: [],
      dogList: [],
      inputError: false,
      user: {
        username: "secondaryfun"
      },
      loginAttempt: {}
    }
  }
  componentDidMount() {
    this.getData("dog");
    this.setState({ user: "harryloveshounds" })
  }
  getData = (resource) => {
    let url = "https://dog-e-date.herokuapp.com/" + resource;

    fetch(url, {
      headers: {
        Accept: "application/json",
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ dogList: data });
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
                <button className="nav-button">Dog Park</button>
              </Link>

              <Link to={"/kennel/"} style={this.state.linkStyle} >
                <button className="nav-button Page">Profile</button>
              </Link>
              <Link to={"/bark/"} style={this.state.linkStyle} >
                <button className="nav-button Page">Barks</button>
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
