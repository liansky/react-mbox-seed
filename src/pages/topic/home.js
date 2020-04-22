import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

@inject('topics')
@withRouter
@observer
export default class Home extends React.Component {
  plus = () => {
    this.props.topics.plus()
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const { name, age } = this.props.topics

    return (
      <div>
        <p>
          {name}, {age}
        </p>
        <button onClick={this.plus}>点我</button>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/about" activeClassName="test">
              About
            </NavLink>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      </div>
    )
  }
}
