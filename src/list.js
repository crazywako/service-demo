import React from 'react'
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Snackbar from 'material-ui/Snackbar'
import update from 'immutability-helper'
import Grid from 'material-ui/Grid'
import Icon from 'material-ui/Icon'
import { withRouter } from 'react-router-dom'
import db from './db'
import moment from 'moment'

class List extends React.Component{
    state = {
        error: false,
        loading: false,
        requests: [],
        snackbarOpen: false

    }

    componentDidCatch(error, info){
        this.setState({error: error})
    }
    componentDidMount(){
        if(this.props.location.state){
            this.setState({...this.props.location.state})
        }
        db.servicerequests.reverse().sortBy('date')
            .then(r => this.setState({requests: r}))


    }
    onClick = () => {
        this.props.history.push('/service-form')

    }
    handleSnackbarClose = () => {
        this.setState({snackbarOpen: false})
    }

    render(){
        if(this.state.error) return <p>Errori {this.state.error}</p>
        const { classes } = this.props;
        return (
            <Grid item xs={10}>
            <div>
                <Paper elevation={5} style={{padding: '24px', flexDirection: 'column', display: 'flex'}}>
                    <Typography variant={'headline'} component={'h3'}>
                        Huoltopyynnöt
                    </Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Isännöitsijä</TableCell>
                                <TableCell>Tilaaja</TableCell>
                                <TableCell>Postinro / tp</TableCell>
                                <TableCell>Kuvaus</TableCell>
                                <TableCell>Päivämäärä</TableCell>
                                <TableCell>Tila</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {this.state.requests.map((r,i) => {
                                return (

                                <TableRow key={i}>
                                    <TableCell>{r.housingmanager}</TableCell>
                                    <TableCell>{r.name}</TableCell>
                                    <TableCell>{r.zip} {r.city}</TableCell>
                                    <TableCell>{r.desc}</TableCell>
                                    <TableCell>{r.date ? moment(r.date).format('DD.MM.YYYY hh:mm:ss') : r.date}</TableCell>
                                    <TableCell>{r.state === 'INPROGRESS' ? 'Käynnissä' : 'Vastaanotettu'} </TableCell>
                                </TableRow>)
                            })}

                        </TableBody>
                    </Table>
                    <Button onClick={this.onClick}>Huoltopyynnön kirjaamiseen <Icon>navigate_next</Icon></Button>
                </Paper>
                <Snackbar
                    open={this.state.snackbarOpen}
                    onClose={this.handleSnackbarClose}
                    autoHideDuration={6000}
                    SnackbarContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Huoltopyyntö tallennettu</span>}
                />

            </div>
            </Grid>
        )
    }
}
export default withRouter(List)