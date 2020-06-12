import React, {Component} from 'react';
import './Kennel.css'

export default class Kennel extends Component {
  constructor(props) {
    super(props)

    this.state = {}

  }

  render() {
    console.log(this.props.username)
    return (
      <div className="profile">
        <div className="hero-photo">
          <div className="sidekick-photo"></div>
        </div>
        <div className="bio">
          <h2>Spot</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
             dolor in reprehenderit in voluptate velit esse cillum dolore eu
             fugiat nulla pariatur. </p>
        </div>
        <div className="bottom">

        </div>

    </div>)
  }

}
