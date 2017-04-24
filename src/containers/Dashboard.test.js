import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Dashboard from './Dashboard';
injectTapEventPlugin();

describe('Dashboard', () => {
  const muiTheme = getMuiTheme({
    palette: {
      accent1Color: deepOrange500,
    },
  });
  const dashboard = new Dashboard;
  const userProducts = dashboard.userProducts;

  it('Dashboard renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MuiThemeProvider muiTheme={muiTheme}>
        <Dashboard />
      </MuiThemeProvider>, div);
  });

  it('should apply ford deals for classic product', () => {
    expect(dashboard.applyFordDeals(userProducts['classic'].id)).toEqual(undefined);
  });

  it('should apply deal if items added is even', () => {
    userProducts['classic'].itemAdded = 2;
    expect(dashboard.buyMoreGetMore(3, userProducts['classic'].id)).toEqual(false);
    expect(dashboard.buyMoreGetMore(2, userProducts['classic'].id)).toEqual(true);
  });

  it('should add dicounted price in provided product', () => {
    userProducts['premium'].quantity = 2;
    expect(dashboard.discountOnPrice(userProducts['premium'].id, 2, 379.99)).toEqual(userProducts['premium'].discountedPrice);
  });


});

