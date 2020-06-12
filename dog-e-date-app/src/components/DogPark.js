import React, { Component } from 'react';
import './DogPark.css';


export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
                likes: 0,
                imgs: [],
                dogList: [],
                updated: false,
                
              }
              this.updateLikes = this.updateLikes.bind(this);
            }
            showModal = (event) => {
                this.setState({ show: true});
              }
            
              // This state is togglable via the showModal and hideModal properties
              
              hideModal = (event) => {
                this.setState({ show: false });
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
                    likes: prevState.likes + 1,
                    updated: false
                  };
                });
              }
            }
          
            render(){
                console.log(this.props.dogList)
              return(
                <div>
                
                  <button onClick={this.updateLikes}>Like</button>
                
                  <p>{this.state.likes}</p>
                  <p>{this.props.dogList}</p>
                 
    
                </div>
                
                


                
              );
          
            }
          
          
          }
