import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const mocks = {
  products: {}
}

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});

const expect = require('chai').expect;
const product = new Product;
const userProducts = {
    classic: { price: 269.99, discountedPrice: 0, quantity: 0, itemAdded: 0, totalCost: 0, id: 'classic' },
    standout: { price: 322.99, discountedPrice: 320, quantity: 0, itemAdded: 0, totalCost: 0, id: 'standout' },
    premium: { price: 394.99, discountedPrice: 0, quantity: 0, itemAdded: 0, totalCost: 0, id: 'premium' },
};

describe('Product', () => {
  
  it('should send product detail to parent component',  () => {
    expect(product.selectPlan(userProducts['classic'])).to.eql(undefined);
  });

});

it('renders without crashing', () => {
  const div = document.createElement('div');
  const selectedPlan = (productDetail) => {
    console.log(productDetail);
    const p_id = productDetail.id;
    const p_info = this.userProducts[p_id]
    this.userProducts[p_id] = Object.assign({}, p_info, { itemAdded: p_info.itemAdded + 1, quantity: p_info.quantity + 1 })
    this.verifyUserDeals(p_id);
    this.calculateTotalAmount();
    this.setState((prevState, props) => ({
      userProducts: this.userProducts,
    }), () => {
      console.log('calback of products => ', this.state.userProducts);
    });
  }


  ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Product selectedPlan={function(abc){}} id='classic' name="Classic Ad" price={269.99}/>
  </MuiThemeProvider>, div);
});
