import React, { Component } from 'react';
import './Barks.css';

let yourMessages = [
    {
        text: "hello there 1"
    },
    {
        text: "hello there 2"
    },
    {
        text: "hello there 3"
    },
    {
        text: "hello there 4"
    },
    {
        text: "hello there 5"
    },
    {
        text: "hello there 6"
    }
]

let userInfo = {
    username: 'ccorkery',
    _id: 1234,
}

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: yourMessages,
            message: "",
            dogs: [],
            dogsYouLike: [],
            matches: [],
            messagesTo: [],
            messagesFrom: []
        }
    };
 
    componentDidMount() {
       
        let dogUrl = "http://dog-e-date.herokuapp.com/dog"
        let messagesUrl = "http://dog-e-date.herokuapp.com/message"
    
        fetch(dogUrl, {
          headers: {
            Accept: "application/json",
          }
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            this.setState({
              dogs: data
            })
          })
          .catch(err => {
            console.log("Error", err);
          });

          fetch(messagesUrl, {
            headers: {
              Accept: "application/json",
            }
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              this.setState({
                messages: data
              })
            })
            .catch(err => {
              console.log("Error", err);
            });
    }

    getMatches = () => {
        let yourMatches = []
        for (let i = 0; i < this.state.dogs.length; i++) {
            for (let j = 0; j < this.state.dogs[i].likes.length; j++) {
                if (this.state.dogs[i].likes[j] === userInfo._id) {
                    console.log(this.state.dogs[i].owner)
                    yourMatches.push(this.state.dogs[i].owner)
                }
            }
        }
        this.setState({
            matches: yourMatches
        })
    }

    getMessagesFromMatch = () => {
        let messagesFromMatch = []
        for (let i = 0; i < this.state.messages.length; i++) {
            if (this.state.messages[i].from === this.state.matches[0] && this.state.messages[i].to === userInfo._id) {
                messagesFromMatch.push(this.state.messages[i])
            }
        }
        this.setState({
            messagesFrom: messagesFromMatch
        })
    }


    getMessagesToMatch = () => {
        let messagesToMatch = []
        for (let i = 0; i < this.state.messages.length; i++) {
            if (this.state.messages[i].to === this.state.matches[0] && this.state.messages[i].from === userInfo._id) {
                messagesToMatch.push(this.state.messages[i])
            }
        }
        this.setState({
            messagesTo: messagesToMatch
        })
    }


    displayMessages = () => {
        let allMessages = []
        let nameOfClass = ""
        for (let i = 0; i < this.state.messages.length; i++) {
            if (i % 2 === 0) {
                nameOfClass = "text to"
            } else {
                nameOfClass = "text from"
            }
            allMessages.push(<div className={nameOfClass}>
                <h3>{this.state.messages[i].text}</h3>
                </div>)
        }
        return (allMessages)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let textMessage = this.state.message
        yourMessages.push({text: textMessage})
        this.setState({
            messages: yourMessages,
            message: ""
        })
    }

    handleChange = (e) => {
        this.setState({
            message: e.target.value
        })
    }

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
                   {this.displayMessages()}
               </div>
               <div className="reply">
                    <form onSubmit={this.handleSubmit}>
                        <input className="your-text" type="text" placeholder="Message" value={this.state.message} onChange={this.handleChange} />
                        <button className="send" type="submit">Send</button>
                     </form>
                </div>
                {console.log(this.props.user)}
            </div>
        )
    }
}

