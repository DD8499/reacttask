import React, { useState } from 'react'
import { Grid, Button, ButtonGroup, Checkbox, TextField, InputLabel } from "@mui/material"
import { makeStyles } from '@mui/styles'
import { Form } from './Form'
import submit from './Form'

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "black"
  },
  subRoot: {
    display: "flex",
    alignItems: "center",
    height: "90vh",
    width: "60vw",
    backgroundColor: "#242424",
    borderRadius:"20px"
  },
  top: {
    display: "flex",
    alignItems: "center",
    // backgroundColor: "red",
    justifyContent: 'center',
    height: "15vh",
    width: "60vw",
    margin: "25px 0px 0px 0px"
  },
  form: {
    // backgroundColor: "green",
    height: "60vh",
    width: "60vw",
    // marginBottom :"-50px"
  },
  down: {
    display: "flex",
    alignItems: "center",
    // backgroundColor: "blue",
    height: "15vh",
    width: "60vw",
    color: 'white'
  },
  btn : {
    // backgroundColor: "yellow",
    height: "7.5vh",
    width: "60vw",

  },
  header : {
    // backgroundColor: "white",
    height: "7.5vh",
    width: "60vw",
    color : 'white'
  },
 
  button : {
    color : 'green',
    borderRadius : '50px'
  },
})
const Data = () => {
  const classes = useStyles()
  const [type , setType] = useState('FAN')
  return (
    <Grid className={classes.root}>
      <Grid direction="column" className={classes.subRoot}>
        <Grid  direction="column" className={classes.top}>
          <Grid className={classes.btn}>
            <ButtonGroup >
              <Button className={classes.button} onClick={() => setType('FAN')}>FAN SIGNUP</Button>
              <Button className={classes.button} onClick={() => setType('TALENT')}>TALENT SIGNUP</Button>
            </ButtonGroup>

          </Grid>
          <Grid className={classes.header}>
            <h3> { type === 'FAN' ? 'Create Your Fan Account' :'Create Your talent Account' }</h3>
          </Grid>
        </Grid>
        <Grid className={classes.form}>

        <Form/>
        </Grid>
      </Grid>
    </Grid>

  )
}

export default Data