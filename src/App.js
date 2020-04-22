import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/topic/home'
import About from './pages/topic/about'
import Topics from './pages/topic/'

const App = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/topics" component={Topics} />
  </Router>
)

export default App
