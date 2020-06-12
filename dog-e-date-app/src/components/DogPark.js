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
      likes: 0,
      imgs: [],
      dogList: [],
      updated: false,
      currentDog: {},
      index: 0,
    }
  }
  componentDidMount() {
    this.setState({
      dogList: dogListSample,
    }, () => {
      this.setState({ currentDog: this.state.dogList[this.getNext()] })
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
    //       dogList: data,
    //       currentDog: data[0]
    //     })
    //   })
    //   .catch(err => {
    //     console.log("Error", err);
    //   });
  }
  handleIgnore = e => {
    this.setState({
      currentDog: this.state.dogList[this.getNext()]
    })
  }
  handleLike = e => {
    this.setState({
      currentDog: this.state.dogList[this.getNext()]
    })
  }
  // updateLike = (like) => {
  //   let type
  //   like ? type = "likes" : "ignores"
  //   const url = "https://dog-e-date.herokuapp.com/dog" + this.props.course["_id"]
  //   fetch(url, {
  //     method: "put",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: data
  //   }).then(res => res.json()).then(res => {
  //     console.log(res)
  //     this.setState({ formResults: res, submitFormSuccessful: true })
  //   }).catch(err => {
  //     console.log(err)
  //     this.setState({ formResults: err, submitFormSuccessful: false })
  //   })
  // }


  getNext = () => {
    let i = Math.floor(this.state.dogList.length * Math.random())
    return i
  }
  render() {
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
          <SliderImage dog={this.state.currentDog} />
          <footer className="modal__info-box__footer">
            <div className="icon like" onClick={this.handleIgnore} >-</div>
            <div className="icon like" onClick={this.handleLike} >+</div>
          </footer>
        </div>
      </div>
    );
  }
}
