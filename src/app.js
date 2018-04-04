import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { pink, green } from 'material-ui/colors'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon'
import Grid from 'material-ui/Grid'
import './style.scss'
import CssBaseline from 'material-ui/CssBaseline';
import config from '../config'
import { withStyles } from 'material-ui/styles'


import Home from './home'
import Form from './form'
import List from './list'

class App extends React.Component{
    state = {
        versions: [],
        error: false,
        loading: false
    }

    componentDidCatch(error, info){
        this.setState({error: error})
    }
    componentDidMount(){


    }
    notify = (count) => toast(`${count} tekniikkaa päivittämättä`);

    render(){
        if(this.state.error) return <p>Errori {this.state.error}</p>
        const { classes } = this.props;
        return (
            <div>
            <CssBaseline />
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <Icon>menu</Icon>
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Suomen Huolto Pori Oy
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div style={{ padding: '24px', display :'flex'}}>
                    <Grid container spacing={24} justify={'center'} alignItems={'center'} direction={'row'} style={{flexGrow: 1}}>

                            <Router basename={config.publicPath}>
                                <Grid container  justify={'center'} alignItems={'center'} direction={'row'} >
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/service-form" component={Form} />
                                    <Route exact path="/list" component={List} />
                                </Grid>
                            </Router>


                    </Grid>
                </div>
            </div>
        )
    }
}
export default withStyles(theme => ({body: {background: pink[50], fontcolor: '#fff'}}))(App)