import React, { Component } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import AddDog from "./components/AddDog";
import Login from "./components/Login.js";
import DogPark from "./components/DogPark.js";
import AddUser from "./components/AddUser.js"
import Barks from "./components/Barks.js"

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      imgs: [],
      dogList: [],
    }

  };

  componentDidMount() {

    this.getData("dog");

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
        console.log(data)
        this.setState({ dogList: data.data });
      })
      .catch(err => {
        console.log("Error", err);
      });
  }
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
              <Link to={"/barks/"} style={this.state.linkStyle} >
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
                <Login />
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
                <DogPark dogList={this.state.dogList} />
              )}
            />
            <Route
              path="/kennel/"
              render={() => (
                null
                // <Kennel userInfo={this.state.userInfo} />
              )}
            />
            <Route
              path="/barks/"
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
