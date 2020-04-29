import React from 'react'
import { Button, TextField, Grid, Paper } from '@material-ui/core'

export default (props) => {
  return (
    <Paper style={{ padding: '20px', marginTop: '30px' }}>
      <Grid container justify="center">
        <Grid item xs={6}>
          <TextField
            value={props.value}
            onChange={props.onChangeValue}
            fullWidth={true}
            placeholder="ADD TODO"
          />
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary">
            添加
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}
