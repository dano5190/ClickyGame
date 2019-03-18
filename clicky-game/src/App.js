import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pics from './pages/pics.js'

class App extends Component {
  render() {
    return (
      /*<div className="App">
        <div className="jumbotron text-center">
          <h1>Clicky Game!!!!!!</h1>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React, and live from NEW YORK IT"S SATURDAY NIGHT!!!!!!!
          </a>
        </header>*/
        <div>
          <Pics />
        </div>
      //</div>
    );
  }
}

export default App;
