import React from 'react'
import { Button, TextField, Grid, Paper } from '@material-ui/core'

export default (props) => {
  return (
    <Paper style={{ padding: '20px', marginTop: '30px' }}>
      <Grid container>
        <Grid
          item
          xs={10}
          md={11}
          style={{ paddingRight: '20px', position: 'relative', top: '3px' }}
        >
          <TextField
            value={props.inputValue}
            onChange={props.onChangeValue}
            onKeyDown={props.onKeyPress}
            fullWidth={true}
            placeholder="ADD TODO"
          />
        </Grid>
        <Grid xs={2} md={1} item>
          <Button
            variant="outlined"
            size="small"
            onClick={props.onAddTodo}
            color="primary"
          >
            ADD
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}
