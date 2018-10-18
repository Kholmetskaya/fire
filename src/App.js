import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
console.log(window)
const firebase = window.firebase;

class App extends Component {
  state ={
    text: "",
    textInput: ""
  }

  componentDidMount(){
    var leadsRef = firebase.database().ref('users/' + '123');
    leadsRef.on('value', (snapshot) => {
    snapshot.forEach( (childSnapshot) => {
      var childData = childSnapshot.val();

      this.setState({
        text: childData
      })
    
    });
});
  }
  onInputChange = (e) => {
    firebase.database().ref('users/' + '123').set({
      username: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{ this.state.text }</h1>
        <input type="text" onChange = {this.onInputChange}/>
      </div>
    );
  }
}

export default App;