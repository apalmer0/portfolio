import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Contact from './Pages/Contact'
import Footer from './components/Footer'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import styles from './styles'

const App: FC = () => (
  <div style={styles.container}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={NotFound} />
      </Switch>
    </Router>
    <Footer />
  </div>
)

export default App
