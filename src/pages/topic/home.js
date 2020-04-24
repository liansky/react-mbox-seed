import React from 'react'
import { observer, inject } from 'mobx-react'
import './style/index.css'

@inject('topics')
@observer
export default class Home extends React.Component {
  plus = () => {
    this.props.topics.plus()
  }

  componentDidMount() {
    console.log(this)
  }

  render() {
    const { name, age } = this.props.topics

    return (
      <div>
        <h2>mbox-class</h2>
        <p className="test">
          {name}, {age}
        </p>
        <button onClick={this.plus}>点我</button>
      </div>
    )
  }
}
