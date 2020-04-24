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
      <h1>mobx-useLocalStore</h1>
      <h2>{todo.name}</h2>
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
