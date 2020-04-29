import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import index from './pages/topic/index'
import mboxClass from './pages/topic/class'
import useLocalStore from './pages/topic/use-local-store'
import route from './pages/topic/route'
import myContext from './pages/topic/context/index'
import myHooks from './pages/topic/hooks/index'

//todo
import todo from './pages/todo/index'

const App = () => (
  <Router>
    <Route exact path="/" component={index} />
    <Route path="/mboxClass" component={mboxClass} />
    <Route path="/useLocalStore" component={useLocalStore} />
    <Route path="/route" component={route} />
    <Route path="/myContext" component={myContext} />
    <Route path="/myHooks" component={myHooks} />
    <Route path="/todo" component={todo} />
  </Router>
)
export default App
