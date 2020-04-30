import React from 'react'
import { List } from '@material-ui/core'
import TodoListItem from './todo-list-item'

export default (props) => {
  return props.list.length > 0 ? (
    <List>
      {props.list.map((item, index) => {
        return (
          <TodoListItem
            {...item}
            key={index}
            onCheckedTodo={() => props.onCheckedTodo(index)}
            onDeleteTodo={() => props.onDeleteTodo(index)}
          ></TodoListItem>
        )
      })}
    </List>
  ) : null
}
