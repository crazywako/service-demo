import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { pink, green } from 'material-ui/colors'
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import update from 'immutability-helper'
import Grid from 'material-ui/Grid'
import Icon from 'material-ui/Icon'
import { withRouter } from 'react-router-dom'


import { withStyles } from 'material-ui/styles'

class Home extends React.Component{
    state = {
        error: false,
        loading: false,
        username: '',
        password: '',

    }

    componentDidCatch(error, info){
        this.setState({error: error})
    }
    componentDidMount(){


    }
    onClick = () => {
        if(this.state.username.length > 0 && this.state.password.length > 0){
            this.props.history.push('/list')
        }
    }
    onChange = (event) => {
        this.setState(update(this.state, {[event.target.id]: {$set: event.target.value}}))
    }

    render(){
        if(this.state.error) return <p>Errori {this.state.error}</p>
        const { classes } = this.props;
        return (
            <Grid item xs={6}>
            <div>
                <Paper elevation={5} style={{padding: '24px', flexDirection: 'column', display: 'flex'}}>
                    <Typography variant={'headline'} component={'h3'}>
                        Kirjaudu huollonkirjaukseen
                    </Typography>
                    <br />
                    <TextField label={'Käyttäjätunnus'} value={this.state.username} id={'username'} onChange={this.onChange} />
                    <TextField label={'Salasana'} value={this.state.password} id={'password'} onChange={this.onChange} />
                    <Button onClick={this.onClick}>Kirjaudu <Icon>navigate_next</Icon></Button>
                </Paper>

            </div>
            </Grid>
        )
    }
}
export default withRouter(withStyles(theme => ({body: {background: pink[50], fontcolor: '#fff'}}))(Home))