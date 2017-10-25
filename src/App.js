import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

let formatName = (user) => {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Deokjae',
  lastName: 'Jeon',
  img: 'https://scontent-mia3-2.xx.fbcdn.net/v/t31.0-8/21994437_1469926939759329_259290861520959843_o.jpg?oh=9f1ed87cfb62ed79b5975c14aeac767b&oe=5A7C4F27'
};

//JSX must contain only one element tag, can have children
//{} to use data in the file
const greetingEle = (
  <div>
    <h1>
      Hello, {formatName(user)}!
    </h1>
    <img src={user.img} class="userImg"/>
  </div>
);

const nextLink = (
  <a href="/components">Next</a>
);

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return(
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div class="App">
        {greetingEle}
        <Clock/>
        {nextLink}
        <Cat/>
      </div>
    );
  }
}
///////////////////////////////////////////////////
// using props
let CatPic = (props)=>{
  return <img src={props.source} />;
}

class Cat extends Component {
  render() {
    return (
      <div class="cat">
        <CatPic source="http://artforcatssake.org/clients/20295/images/11139968_797708487004033_5042467130001247771_n.jpg"/>
        <CatPic source="https://i.pinimg.com/736x/c1/70/3b/c1703b2edfc4b1ba15d4d740bf7b2234--red-cat-cat-wallpaper.jpg"/>
      </div>
    );
  }
}


export default App;
