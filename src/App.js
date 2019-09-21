import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from './Pages/About';
import Hire from './Pages/Hire';
import Home from './Pages/Home';
import Skills from './Pages/Skills';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/hire" component={Hire} />
      </Router>
    );
  }
}

export default App;
