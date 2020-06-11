import React, { Component } from 'react';
import './Barks.css';



export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: [],
        }
    };
 
    render() {
        return (
            <div className="content">
                <div className="title"><h1>Bark Dashboard</h1></div>
               <div className="matches">
                   <div className="user">
                       <h2>User 1</h2>
                   </div>
                   <div className="user">
                       <h2>User 2</h2>
                   </div>
                   <div className="user">
                       <h2>User 3</h2>
                   </div>
                   <div className="user">
                       <h2>User 4</h2>
                   </div>
                   <div className="user">
                       <h2>User 5</h2>
                   </div>
               </div>
               <div className="messages">
                   <div className="text from">
                       <h3>message 1 from</h3>
                   </div>
                   <div className="text to">
                       <h3>message 1 to</h3>
                   </div>
                   <div className="text from">
                       <h3>message 2 from</h3>
                   </div>
                   <div className="text to">
                       <h3>message 2 to</h3>
                   </div>
                   <div className="text from">
                       <h3>message 3 from</h3>
                   </div>
                   <div className="text to">
                       <h3>message 3 to</h3>
                   </div>
               </div>
               <div className="reply">
                    <form>
                        <input className="your-text" type="text" placeholder="Message" />
                        <button className="send" type="submit">Send</button>
                     </form>
                </div>
            </div>
        )
    }
}

