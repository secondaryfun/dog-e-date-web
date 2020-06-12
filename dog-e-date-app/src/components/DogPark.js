import React, { Component } from 'react';
import './DogPark.css';


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      likes: 0,
      userLikes: ["lakufioajflkali13oiafl", "lkajdfoadflkjadkls;f"],
      imgs: [],
      dogList: [],
      updated: false,
      dogPic: "https://www.washingtonian.com/wp-content/uploads/2018/10/marcus-wallis-471438-unsplash-2048x1536.jpg"
    }
    this.updateLikes = this.updateLikes.bind(this);
  }
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
        this.setState({ dogList: data });
      })
      .catch(err => {
        console.log("Error", err);
      });
  }
  updateLikes() {

    if (!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true
        };
      });
    } else {

      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          updated: false
        };
      });
    }


  }

  render() {
    console.log(this.state.dogList)
    return (
      <div className="overlay">
        <div className="info-box">

          <button onClick={this.updateLikes}>Like</button>
          <p>{this.state.likes}</p>
          <div style={{ background: `"url(${this.state.dogPic})"` }}></div>
          <img className="slider" alt="dog" src="https://www.washingtonian.com/wp-content/uploads/2018/10/marcus-wallis-471438-unsplash-2048x1536.jpg" />
          <p>{this.props.dogList}</p>
          <h1>Hello</h1>
        </div>
      </div>





    );

  }


}
