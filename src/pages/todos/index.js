import React from 'react'
import Layouts from './layouts'
import AddTodo from './add-todo'
import TodoList from './todo-list'
import { useInputValue, useTodos } from './todo-hook'

export default () => {
  const { inputValue, changeInputValue, clearInput, keyPress } = useInputValue()
  const { todos, addTodo, checkedTodo, deleteTodo } = useTodos()

  const onAddTodo = () => {
    addTodo(inputValue)
    clearInput()
  }

  return (
    <Layouts>
      <AddTodo
        inputValue={inputValue}
        onAddTodo={onAddTodo}
        onChangeValue={changeInputValue}
        onKeyPress={(e) => keyPress(e, onAddTodo)}
      ></AddTodo>
      <TodoList
        list={todos}
        onCheckedTodo={checkedTodo}
        onDeleteTodo={deleteTodo}
      ></TodoList>
    </Layouts>
  )
}
