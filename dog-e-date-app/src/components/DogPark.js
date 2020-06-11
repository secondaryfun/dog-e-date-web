import React, { Component } from 'react';
import './DogPark.css';


export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
                likes: 0,
                imgs: [],
                dogList: [],
                updated: false
              }
              this.updateLikes = this.updateLikes.bind(this);
            }
          
            updateLikes() {
          
              if(!this.state.updated) {
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
          
            render(){
          
              return(
                <div>
                  <p onClick={this.updateLikes}>Like</p>
                  <p>{this.state.likes}</p>
                </div>
                


                
              );
          
            }
          
          
          }