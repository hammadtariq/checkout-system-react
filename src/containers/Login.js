import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import './Login.css';

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
        this.setState({ userInfo: user });
    }


    /**
     * 
     * 
     * @param {any} evt 
     * 
     * @memberOf Login
     */
    onEnterKey(evt) {
        if (evt.key === 'Enter') {
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
                <div className='container-login'>
                    <h5>Known Usernames</h5>
                    <ul>
                        <li className='name-li'>apple</li>
                        <li className='name-li'>nike</li>
                        <li className='name-li'>unilever</li>
                        <li className='name-li'>ford</li>
                    </ul>
                    <h2>Login</h2>
                    <Card>
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


