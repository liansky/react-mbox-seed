import React from 'react'
import Layouts from './layouts'
import AddTodo from './add-todo'
import TodoList from './todo-list'
import { useInputValue } from './todo-hook'

export default () => {
  const { inputValue, changeInputValue } = useInputValue()

  return (
    <Layouts>
      <AddTodo value={inputValue} onChangeValue={changeInputValue}></AddTodo>
      <TodoList></TodoList>
    </Layouts>
  )
}
