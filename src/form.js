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

import moment from 'moment';
import db from './db'


import { withStyles } from 'material-ui/styles'

class Form extends React.Component{
    state = {
        error: false,
        loading: false,
        name: '',
        address: '',
        zip: '',
        city: '',
        phone: '',
        housingmanager: 'Maken Isännöinti Oy',
        desc:'',
        date: moment().toISOString()

    }

    componentDidCatch(error, info){
        this.setState({error: error})
    }
    componentDidMount(){


    }
    onClick = () => {

        db.servicerequests.add({
            name: this.state.name,
            address: this.state.address,
            zip: this.state.zip,
            city: this.state.city,
            phone: this.state.phone,
            housingmanager: this.state.housingmanager,
            desc: this.state.desc,
            date: this.state.date,
            state: 'INPROGRESS'
        })
        this.props.history.push({
            pathname: '/list',
            state: { snackbarOpen: true }
        })

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
                        Kirjaa huoltopyyntö
                    </Typography>
                    <br />
                    <TextField label={'Isännöitsijä'} defaultValue={this.state.housingmanager} id={'housingmanager'} onChange={this.onChange} disabled />
                    <TextField label={'Tilaajan nimi'} value={this.state.name} id={'name'} onChange={this.onChange} />
                    <TextField label={'Katuosoite'} value={this.state.address} id={'address'} onChange={this.onChange} />
                    <TextField label={'Postinumero'} value={this.state.zip} id={'zip'} onChange={this.onChange} />
                    <TextField label={'Postitoimipaikka'} value={this.state.city} id={'city'} onChange={this.onChange} />
                    <TextField label={'Puhelinnumero'} value={this.state.phone} id={'phone'} onChange={this.onChange} />
                    <TextField label={'Kuvaus'} multiline value={this.state.desc} id={'desc'} rows={5} onChange={this.onChange} />

                    <Button onClick={this.onClick}>Kirjaa huoltopyyntö <Icon>navigate_next</Icon></Button>

                </Paper>

            </div>
            </Grid>
        )
    }
}
export default withRouter(withStyles(theme => ({body: {background: pink[50], fontcolor: '#fff'}}))(Form))