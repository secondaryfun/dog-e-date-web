import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './DogPark.css';
import SliderImage from './SliderImage'


let dogListSample = [
  {
    "_id": "5ee25a4e3389db00042d9499",
    "name": "Spot",
    "parent": "Sue Smith",
    "breed": "Pit Bull",
    "info": "Super Friendly",
    "age": 3,
    "size": "M",
    "__v": 0,
    "likes": [],
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
    "likes": [],
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
    "likes": [],
    "image": "https://www.dogbreedinfo.com/images32/MastidoodleMastiffPoodleMixedBreedDogGordon4YearsOld.jpg"
  },
]

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogListFeed: [],
      updated: false,
      currentDog: {},
      defaultDog: {
        "_id": "5ee29deaeb78be000433283c",
        name: "Dog-e-Date Stand-In",
        image: "https://www.keystonepuppies.com/wp-content/uploads/2018/10/Mastiff-Mix-Category.jpg",
        tagline: "His eyes will steal your soul..."
      }
    }
  }
  componentDidMount() {
    this.setState({
      dogListFeed: dogListSample,
    }, () => {
      this.setState({ currentDog: this.state.dogListFeed[this.getNext()] })
    })

    // let url = "https://dog-e-date.herokuapp.com/dog"

    // fetch(url, {
    //   headers: {
    //     Accept: "application/json",
    //   }
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data)
    //     this.setState({
    //       dogListFeed: data,
    //       currentDog: data[0]
    //     })
    //   })
    //   .catch(err => {
    //     console.log("Error", err);
    //   });
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

    const url = "https://dog-e-date.herokuapp.com/dog" + this.state.currentDog["_id"]
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
    console.log(this.currentDog)
    let currentDog
    this.state.currentDog ? currentDog = this.state.currentDog : currentDog = this.state.defaultDog
    return (
      <div className="modal-overlay" >
        <div className="modal__info-box">
          <header className="modal__info-box__header">
            <Link to={"/kennel/"} style={this.state.linkStyle} >
              <div className="icon profile">Kennel</div>
            </Link>
            <Link to={"/"} style={this.state.linkStyle} >
              <div className="icon homepage">Home</div>
            </Link>
            <Link to={"/bark/"} style={this.state.linkStyle} >
              <div className="icon chat">Bark</div>
            </Link>
          </header>
          <SliderImage dog={currentDog} />
          <footer className="modal__info-box__footer">
            <div className="icon like" onClick={this.handleIgnore} >-</div>
            <div className="icon like" onClick={this.handleLike} >+</div>
          </footer>
        </div>
      </div>
    );
  }
}
