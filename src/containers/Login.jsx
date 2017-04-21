import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { deepOrange500 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import { Route, state} from 'react-router-dom'

const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 80,
    },
};

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});

class Login extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
        }
        this.login = this.login.bind(this);
    }

    login(userInfo) {
        console.log("user => ",userInfo);
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    <h2>Login</h2>
                    <Card>
                        {/*<CardHeader
                            title="Login"
                            subtitle="Subtitle"
                            actAsExpander={true}
                            showExpandableButton={true}
                        />*/}
                        <CardText>
                            <div>
                                <TextField
                                    hintText="Username Field"
                                    floatingLabelText="Username"
                                    type="text"
                                />
                            </div>
                            <div>
                                <TextField
                                    hintText="Password Field"
                                    floatingLabelText="Password"
                                    type="password"
                                />
                            </div>
                        </CardText>
                        <CardActions>
                            <RaisedButton
                                label="Login"
                                secondary={true}
                                onTouchTap={this.login}
                            />
                        </CardActions>
                    </Card>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Login;


