import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'mobx-react'
import topics from './stores/topics'

const stores = {
  topics,
}

const TopicsContext = React.createContext(topics)

ReactDOM.render(
  <Provider {...stores}>
    <TopicsContext.Provider value={topics}>
      <App />
    </TopicsContext.Provider>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
