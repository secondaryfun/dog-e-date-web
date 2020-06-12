import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './DogPark.css';
import SliderImage from './SliderImage'

export default class Kennel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogListFeed: [],
      updated: false,
      currentDog: {},
      defaultDog: {
        "_id": "5ee29deaeb78be000433283c",
        name: "Goofers",
        image: "https://www.keystonepuppies.com/wp-content/uploads/2018/10/Mastiff-Mix-Category.jpg",
        tagline: "His eyes will steal your soul..."
      }
    }
  }
  componentDidMount() {
    // this.setState({
    //   dogListFeed: dogListSample,
    // }, () => {
    //   this.setState({ currentDog: this.state.dogListFeed[this.getNext()] })
    // })

    let url = "https://dog-e-date.herokuapp.com/dog"

    fetch(url, {
      headers: {
        Accept: "application/json",
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          dogListFeed: data,
          currentDog: data[0]
        })
      })
      .catch(err => {
        console.log("Error", err);
      });
  }
  handleIgnore = e => {
    this.updateDog(false)
    this.getNext()
  }

  handleLike = e => {
    this.updateDog(false)
    this.getNext()
  }

  getNext = () => {
    let i = Math.floor(this.state.dogListFeed.length * Math.random())
    this.setState({
      currentDog: this.state.dogListFeed[i]
    })
  }
  updateDog = (like) => {
    let type
    like ? type = type = "likes" : type = "ignores"

    let data = JSON.stringify({

    })

    // const url = "https://dog-e-date.herokuapp.com/dog" + this.state.currentDog["_id"]
    // fetch(url, {
    //   method: "put",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: data
    // }).then(res => res.json()).then(res => {
    //   console.log(res)
    //   this.setState({ formResults: res, submitFormSuccessful: true })
    // }).catch(err => {
    //   console.log(err)
    //   this.setState({ formResults: err, submitFormSuccessful: false })
    // })
  }

  render() {
    let currentDog
    this.state.currentDog ? currentDog = this.state.currentDog : currentDog = this.state.defaultDog
    return (
      <div className="modal-overlay" >
        <div className="modal__info-box">
          <header className="modal__info-box__header">
            <Link to={"/kennel/"} style={this.state.linkStyle} >
              <div className="icon icon_kennel">Kennel</div>
            </Link>
            <Link to={"/"} style={this.state.linkStyle} >
              <div className="icon icon_homepage">Home</div>
            </Link>
            <Link to={"/bark/"} style={this.state.linkStyle} >
              <div className="icon icon_chat">Bark</div>
            </Link>

          </header>
          <SliderImage dog={currentDog} />
          <footer className="modal__info-box__footer">
            <div className="icon icon_ignore" onClick={this.handleIgnore} >❌</div>
            <div className="icon icon_like" onClick={this.handleLike} >✅</div>
          </footer>
        </div>
      </div>
    );
  }
}
