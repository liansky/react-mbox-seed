import React from 'react'
import { observer, inject } from 'mobx-react'
import styles from './style/index.module.scss'

@inject('topics')
@observer
export default class Home extends React.Component {
  plus = () => {
    this.props.topics.plus()
  }

  render() {
    const { name, age } = this.props.topics

    return (
      <div>
        <h2 className="title">mbox-class</h2>
        <p className={styles.test}>
          {name}, {age}
        </p>
        <button className={styles.btn} onClick={this.plus}>
          点我
        </button>
      </div>
    )
  }
}
