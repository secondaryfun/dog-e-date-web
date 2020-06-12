import React, { Component } from 'react';
import './DogPark.css';
import SliderImage from './SliderImage'

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
    }
  }
  componentDidMount() {
    this.getData("dog");
    this.setState({ dogList: dogList, currentDog: dogList[0] })

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
          likes: prevState.likes + 1,
          updated: false
        };
      });
    }
  }

  render() {
    console.log(this.props.dogList)
    return (
      <div className="modal-overlay" >
        <div className="modal__info-box">
          <header className="modal__info-box__header">
            <div className="icon profile">Kennel</div>
            <div className="icon homepage">Home</div>
            <div className="icon chat">Chat</div>
          </header>
          <SliderImage dog={this.state.currentDog} />
          <footer className="modal__info-box__footer">
            <div className="icon like">+</div>
            <div className="icon like">-</div>
          </footer>
        </div>
      </div>
    );
  }
}
