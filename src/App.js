import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Hire from './Pages/Hire';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Projects from './Pages/Projects';
import Writing from './Pages/Writing';
import Detail from './Pages/Detail'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects/:slug" component={Detail} />
          <Route path="/projects" component={Projects} />
          <Route path="/writing/:slug" component={Detail} />
          <Route path="/writing" component={Writing} />
          <Route path="/hire" component={Hire} />
          <Route path="/" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
