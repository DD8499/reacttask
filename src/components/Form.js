import { Button, Checkbox, Grid, InputLabel, TextField } from '@mui/material'
import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import axios from 'axios'


const useStyles = makeStyles({
    input: {
        height: '35px',
        width: '410px',
        border : '2px solid #10FF8D',
        borderRadius : "50px",
        backgroundColor : "transparent",
        padding : "5px",
        color:'white'

    },
    link :{
        color : "#10FF8D",
        textDecoration : 'none'
      },
    label : {
        marginLeft :'-340px',
        color : 'white',
        fontSize :'10px'
    },
    main :{
        margin : '5px'
    },
    button : {
        color : 'green',
        borderRadius : '50px'
      },
})
export const Form = ({type}) => {
    const classes = useStyles()
    const [name , setName] = useState('')
  const [last , setLast] = useState('')
  const [user , setUser] = useState('')
  const [mail , setMail] = useState('')
  const [pass , setPass] = useState('')
//   const [value , setValue] = useState(false)

  const submit = (e) =>{
    e.preventDefault();
    axios.post("http://wren.in:3200/api/sign-up/fan",{
      first_name : name,
      last_name : last,
      username : user,
      email : mail,
      password : pass,
    }).then(
      res => console.log(res , "data")
    )
  }
    return (
        <Grid>
            <form>
                <Grid className={classes.main}>
                <Grid>
                    <label className={classes.label}>
                        First name* <br />
                        <input placeHolder= "first name" className={classes.input} type="text"  required />
                    </label>
                </Grid>
                <Grid>
                    <label  className={classes.label} >
                        Last name* <br />
                        <input placeHolder= "last name" className={classes.input} type="text"   required/>
                    </label>
                </Grid>
                <Grid>
                    <label  className={classes.label}>
                        User name* <br />
                        <input placeHolder= " username" className={classes.input} type="text"   required/>
                    </label>
                </Grid>
                <Grid>
                    <label  className={classes.label}>
                        Email* <br />
                        <input placeHolder= "email" className={classes.input} type="text" required/>
                     </label>
                </Grid>
                <Grid>
                    <label  className={classes.label}>
                        Password* <br />
                        <input placeHolder= "password" className={classes.input} type="text"  required/>
                    </label>
                </Grid>
                <Grid direction="column" className={classes.down}>
          <Grid  className={classes.privacy}>
            <Grid>
              <Checkbox  color="success"/>i am agree to the <a href='/' className={classes.link}>terms and conditions</a>
            </Grid>
          </Grid>
          <Grid  >
          <Button color='success' variant="contained" className={classes.button} onClick={submit}> {type === 'FAN' ? 'FAN SIGNUP': 'TALENT SIGNUP'}</Button>
          </Grid>
        </Grid>
                </Grid>
            </form>


        </Grid>
    )
}
