import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from './Pages/Homepage';
import About from './Pages/About';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={About} />
      </Router>
    );
  }
}

export default App;
