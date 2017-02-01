import React, { Component } from 'react';
import Button from '../components/Button'
import logo from '../../public/images/logo.svg';
import '../../public/styles/App.css';

console.log(logo);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Reacts</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
       
        </p>
           <Button/>
      </div>
    );
  }
}

export default App;
