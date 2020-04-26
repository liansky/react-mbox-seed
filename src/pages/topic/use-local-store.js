import React from 'react'
import { observer, useLocalStore } from 'mobx-react'

export default observer(() => {
  const todo = useLocalStore(() => {
    return {
      name: '哈哈',
      flag: false,
    }
  })
  return (
    <div>
      <h2>mobx-useLocalStore</h2>
      <p>{todo.name}</p>
      <button
        onClick={() => {
          todo.name = todo.flag ? '你好' : 'hello'
          todo.flag = !todo.flag
        }}
      >
        点我
      </button>
    </div>
  )
})
