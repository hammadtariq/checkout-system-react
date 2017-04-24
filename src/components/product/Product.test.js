import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Product />
  </MuiThemeProvider>, div);
});
