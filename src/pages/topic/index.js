import React from 'react'
import { Link, withRouter } from 'react-router-dom'

@withRouter
export default class Index extends React.Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <h1
          onClick={() =>
            this.props.history.push({
              pathname: '/home',
            })
          }
        >
          web
        </h1>
        <ul>
          <li>
            <Link to="/topics">router-route</Link>
          </li>
          <li>
            <Link to="/home">mbox-class</Link>
          </li>
          <li>
            <Link to="/about">mbox-useLocalStore</Link>
          </li>
        </ul>
      </div>
    )
  }
}
