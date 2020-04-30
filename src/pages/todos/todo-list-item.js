import React from 'react'
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core'
import { DeleteOutlineOutlined } from '@material-ui/icons'

export default (props) => {
  return (
    <ListItem
      style={{ borderBottom: '1px solid #ebebeb' }}
      dense
      button
      onClick={props.onCheckedTodo}
    >
      <ListItemIcon>
        <Checkbox checked={props.checked} />
      </ListItemIcon>

      <ListItemText primary={props.text} />

      <ListItemSecondaryAction>
        <IconButton aria-label="comments" onClick={props.onDeleteTodo}>
          <DeleteOutlineOutlined color="secondary" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
