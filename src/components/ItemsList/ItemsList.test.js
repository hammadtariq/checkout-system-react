import React from 'react';
import ReactDOM from 'react-dom';
import ItemsList from './ItemsList';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const expect = require('chai').expect;
const itemsList = new ItemsList;
const userProducts = {
    classic: { price: 269.99, discountedPrice: 0, quantity: 0, itemAdded: 0, totalCost: 0, id: 'classic' },
    standout: { price: 322.99, discountedPrice: 320, quantity: 0, itemAdded: 0, totalCost: 0, id: 'standout' },
    premium: { price: 394.99, discountedPrice: 0, quantity: 0, itemAdded: 0, totalCost: 0, id: 'premium' },
};

describe('ItemsList', () => {

  it('should return product price', function () {
    expect(itemsList.verifyDiscount(userProducts['classic'])).to.eql(269.99);
  });

  it('should return product discounted price', function () {
    expect(itemsList.verifyDiscount(userProducts['standout'])).to.eql(320);
  });
  
  it('should return total cost and total items', function () {
    expect(itemsList.createItemList(userProducts)).to.eql({ 'totalCost': 0, 'items': [] });
  });

});


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
      <ItemsList />
    </MuiThemeProvider>, div);
});
