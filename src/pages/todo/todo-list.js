import React from 'react'
import { List, Paper } from '@material-ui/core'
import TodoListItem from './todo-list-item'

export default (props) => {
  return (
    <Paper>
      <List>
        {props.list &&
          props.list.map((item, index) => {
            return <TodoListItem {...item} key={`index`}></TodoListItem>
          })}
      </List>
    </Paper>
  )
}
