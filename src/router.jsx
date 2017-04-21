import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Login from './containers/Login';
import Dashboard from './containers/Dashboard';

/*const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
        </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
        </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
        </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )} />
    </div>
)*/

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});

const RouteComponent = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
            <div>
                <AppBar
                    title={<span className="appbar-title" >Checkout System</span>}
                    iconElementRight={
                        <ul className="nav-bar">
                            <li className="nav-li"><Link to="/">Login</Link></li>
                            <li className="nav-li"><Link to="/dashboard">Dashboard</Link></li>
                        </ul>
                    }
                />

                <Route exact path="/" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
            </div>
        </Router>
    </MuiThemeProvider>

)
export default RouteComponent