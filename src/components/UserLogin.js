// import React from 'react'

import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'


const style = makeStyles( theme => ({
    main: {
        marginTop: theme.spacing(15),
        display: 'flex',
        flexDirection: 'column',
        width: '30%'
    },
    button: {
        marginTop: theme.spacing(2)
    }
}))

const UserLogin = (props) => {
    const classes = style()
    return (
    <Container className={classes.main}>
        <TextField label="Username *" />
        <TextField label="Password *" />
        <br></br>
        <Button onClick={props.handleLogin} className={classes.button} variant="contained" color="primary">Login</Button>
    </Container>
    )
}

export default UserLogin
