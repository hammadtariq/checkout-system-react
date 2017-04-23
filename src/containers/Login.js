import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';

const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 80,
    },
};

/**
 * 
 * 
 * @class Login
 * @extends {Component}
 */
class Login extends Component {

    /**
     * Creates an instance of Login.
     * @param {any} props 
     * 
     * @memberOf Login
     */
    constructor(props) {
        super(props)
        this.state = {
            userInfo: { username: '' }
        }
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onEnterKey = this.onEnterKey.bind(this);
    }

    /**
     * 
     * 
     * @param {any} evt 
     * 
     * @memberOf Login
     */
    handleChange(evt) {
        const user = Object.assign(this.state.userInfo, { username: evt.target.value.substr(0, 100) })
        console.log(user);
        this.setState({ userInfo: user });
    }

    onEnterKey(evt) {
        if (evt.key == 'Enter') {
            this.login();
        }
    }

    /**
     * 
     * 
     * 
     * @memberOf Login
     */
    login() {
        console.log("user => ", this.state.userInfo);
        this.props.history.push('/dashboard', { user: this.state.userInfo });
    }

    /**
     * 
     * 
     * @returns 
     * 
     * @memberOf Login
     */
    render() {
        return (
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
                                name="username"
                                floatingLabelText="Username"
                                type="text"
                                value={this.state.textVal}
                                autoFocus="autoFocus"
                                onChange={this.handleChange}
                                onKeyPress={this.onEnterKey}
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
        );
    }
}

export default Login;


