import React, { Component } from 'react';
import './Kennel.css'

export default class Kennel extends Component {
  constructor(props){
    super(props)

    this.state = {}

  }

  render() {
    console.log(this.props.username)
    return(
      <div className="profile">
        <div className="hero-photo">
          <div className="sidekick-photo">

          </div>
        </div>
      </div>
    )
  }

}
