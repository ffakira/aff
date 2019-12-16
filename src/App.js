import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Hello my name is Akira F. Fukushima</h1>
          <h3>I am a Fullstack Web Developer &amp; Food Enthusiast</h3>
          <a href="https://github.com/ffakira" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-lg fa-github"> Github</i>
          </a>
          <a href="https://linkedin.com/in/akiraff" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-lg fa-linkedin"> Linkedin</i>
          </a>
        </div>
      </header>
      <footer>
        <span>&copy; 2016-2020 &lambda;kiraff</span>
      </footer>
    </div>
  );
}

export default App;
