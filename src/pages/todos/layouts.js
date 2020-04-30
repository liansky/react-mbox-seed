import React from 'react'
import { AppBar, Typography, Toolbar, Container } from '@material-ui/core'

export default (props) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            TODO APP
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>{props.children}</Container>
    </div>
  )
}
