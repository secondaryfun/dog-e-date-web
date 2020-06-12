import React, {Component} from 'react';
import './Kennel.css'

export default class Kennel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userData: {}
    }

  }

  componentDidMount() {
        this.getUserData()
    }
    getUserData = () => {

        let url = `https://dog-e-date.herokuapp.com/user`
        fetch(url, {
            headers: {
                Accept: "application/json",
            }
        })
            .then(res => res.json())
            .then(data => {
                this.setState({ userData: data });
            })
            .catch(err => {
                console.log("Error", err);
            });
    }

  render() {
    console.log(this.state.userData)
    return (
      <div className="profile">
        <div className="hero-photo">
          <div className="sidekick-photo"></div>
        </div>
        <div className="bio">
          <h2>Monica</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute </p>
        </div>
        <div className="bottom">
            <div className="pic1"></div>
            <div className="pic2"></div>
            <div className="pic3"></div>
        </div>

    </div>)
  }

}
