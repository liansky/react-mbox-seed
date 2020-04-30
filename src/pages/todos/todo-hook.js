import { useState } from 'react'

export const useInputValue = (initVal = '') => {
  const [inputValue, setInputValue] = useState(initVal)

  return {
    inputValue,
    changeInputValue: (e) => setInputValue(e.target.value),
    clearInput: () => setInputValue(''),
    keyPress: (e, cb) => {
      if (e.which === 13 || e.keyCode === 13) {
        cb(inputValue)
      }
    },
  }
}

export const useTodos = (initTodos = []) => {
  const [todos, setTodos] = useState(initTodos)
  return {
    todos,
    addTodo: (text) => {
      if (text !== '') {
        setTodos(
          todos.concat([
            {
              text,
              checked: false,
            },
          ])
        )
      }
    },
    checkedTodo: (index) => {
      setTodos(
        todos.map((todo, idx) => {
          if (idx === index) {
            todo.checked = !todo.checked
          }
          return todo
        })
      )
    },
    deleteTodo: (index) => {
      setTodos(todos.filter((todo, idx) => idx !== index))
    },
  }
}
