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
            <Link to="/route">router-route</Link>
          </li>
          <li>
            <Link to="/myContext">myContext</Link>
          </li>
          <li>
            <Link to="/myHooks">hooks</Link>
          </li>
          <li>
            <Link to="/mboxClass">mbox-class</Link>
          </li>
          <li>
            <Link to="/useLocalStore">mbox-useLocalStore</Link>
          </li>
        </ul>
      </div>
    )
  }
}
