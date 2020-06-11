import React, { Component } from 'react';
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
        imgs: [],
        
    }
    
  };

// componentDidMount(){

//       let url = "https://dog.ceo/api/breeds/image/random/2ad32a52-5d71-4e75-bbf6-f49b53c77888";

//       fetch(url, {
//         headers: {
//           Accept: "application/json",
//         }
//       })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data)
//         this.setState({imgs: data.data});
//       })
//         .catch(err => {
//           console.log("Error", err);
//       });
//       }
  
render(){


  return (
    <div className="App">
   
    <header>
      <span class="logo">
      <h2>Dog-E-Date</h2>
      </span>
    </header>
    
    <div className="login-button">
      <button className="Login">LOG IN</button>
      </div>
      
      <div className="container">

        <h1>WELCOME TO YOUR NEXT DOG-E-DATE</h1>
     
      <button className="SignUp">SIGN UP</button>

      </div>
      
    </div>
  );
}
}
export default App;
