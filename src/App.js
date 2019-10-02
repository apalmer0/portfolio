import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Contact from './Pages/Contact';
import Detail from './Pages/Detail'
import Footer from './components/Footer'
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Projects from './Pages/Projects';
import Writing from './Pages/Writing';
import styles from './styles'

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects/:slug" component={Detail} />
            <Route path="/projects" component={Projects} />
            <Route path="/writing/:slug" component={Detail} />
            <Route path="/writing" component={Writing} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={NotFound} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
