import React, { Component } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login.js"

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      imgs: [],
      dogList: [],
    }

  };

  componentDidMount() {

    let url = "https://dog-e-date.herokuapp.com/dog";

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
              <Link to={"/kennel/"} style={this.state.linkStyle} >
                <button className="SignUp">That's One Sexy Dog</button>
              </Link>
              <Link to={"/login/"} style={this.state.linkStyle} >
                <button className="Login">LOG IN</button>
              </Link>
              <Link to={"/signup/"} style={this.state.linkStyle} >
                <button className="SignUp">SIGN UP</button>
              </Link>
            </div>

            <Route
              path="/login/"
              render={() => (
                <Login />
              )
              }
            />

            <Route
              path="/signup/"
              render={() => (
                null
              )
              }
            />
            <Route
              path="/kennel/"
              render={() => (
                null
                // <Kennel dogList={this.state.dogList} />
              )
              }
            />



          </div>

        </div>
      </div>
    );
  }
}
export default App;
