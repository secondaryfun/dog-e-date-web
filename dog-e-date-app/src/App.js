import React, { Component } from 'react';
import './App.css';
// import Dog from './dog.js';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
        dog: '',
    }
    
  };

componentDidMount(){

      let url = "https://dog.ceo/api/breeds/image/random/2ad32a52-5d71-4e75-bbf6-f49b53c77888";

      fetch(url, {
        headers: {
          Accept: "application/json",
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          dogs: data,
        });
      });
    
      console.log("componentDidMount")
    }
  
render(){


  return (
    <div className="App">
      <div className="container">
     
        <h1>Image</h1>
        
      </div>
      
    </div>
  );
}
}
export default App;
