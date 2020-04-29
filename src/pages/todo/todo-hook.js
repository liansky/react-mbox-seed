import { useState } from 'react'

export const useInputValue = (initVal = '') => {
  const [inputValue, setInputValue] = useState(initVal)

  return {
    inputValue,
    changeInputValue: (e) => setInputValue(e.target.value),
    clearInput: () => setInputValue(''),
  }
}

export const useTodos = (initTodos = []) => {
  const [todos, setTodos] = useState(initTodos)
  return {
    todos,
    addTodo: (text) => {
      setTodos(
        todos.concat([
          {
            text,
            checked: false,
          },
        ])
      )
    },
  }
}
