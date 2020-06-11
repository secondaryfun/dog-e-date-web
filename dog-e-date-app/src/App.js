import React, { Component } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login.js"

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
        imgs: [],
        
    }
    
  };

// componentDidMount(){

//       let url = "";

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
      <span className="logo">
      <h2>Dog-E-Date</h2>
      </span>
    </header>
    
    
      
      <div className="container">

        <h1>WELCOME TO YOUR NEXT DOG-E-DATE</h1>
     
     
      <div className="button-container">
      <button className="Login">LOG IN</button>
      <button className="SignUp">SIGN UP</button>
      </div>
    
      <Route 
        path="/login/"
        render={ () => ( null
        )
        }
      />

      <Route 
        path="/signup/"
        render= { () => ( null
        ) 
        }
      />

     

      </div>
      
    </div>
  );
}
}
export default App;
