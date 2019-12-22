import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Project from './components/Project';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/projects">Projects</Link></li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Project />
        </Route>
      </Switch>

      <footer>
        <span>&copy; 2016 - 2020 &lambda;kiraff</span>
      </footer>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <div className="container">
    //       <h1>Hello my name is Akira F. Fukushima</h1>
    //       <h3>I am a Fullstack Web Developer &amp; Food Enthusiast</h3>
    //       <a href="https://github.com/ffakira" target="_blank" rel="noopener noreferrer">
    //         <i className="fa fa-lg fa-github"> Github</i>
    //       </a>
    //       <a href="https://linkedin.com/in/akiraff" target="_blank" rel="noopener noreferrer">
    //         <i className="fa fa-lg fa-linkedin"> Linkedin</i>
    //       </a>
    //     </div>
    //   </header>
    //   <footer>
    //     <span>&copy; 2016-2020 &lambda;kiraff</span>
    //   </footer>
    // </div>
  );
}

export default App;
