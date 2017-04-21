import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import { deepOrange500 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom'

import Product from '../components/product/Product';

import './Dashboard.css';

// const muiTheme = getMuiTheme({
//   palette: {
//     accent1Color: deepOrange500,
//   },
// });

class Dashboard extends Component {
  userProducts = [];
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };

    this.checkout = this.checkout.bind(this);
    this.selectedPlan = this.selectedPlan.bind(this);
    this.verifyUser = this.verifyUser.bind(this);
  }

  selectedPlan(productDetail) {
    console.log(productDetail);
    this.userProducts.push(productDetail)
  }

  checkout() {
    let totalCost = 0;
    console.log(this.userProducts);
    for (let idx = 0; idx < this.userProducts.length; idx++) {
      console.log('sad', this.userProducts[idx]);
      totalCost += parseFloat(this.userProducts[idx].price);
    }
    console.log('total => ', totalCost);
  }

  verifyUser() {
    switch (this.user.username) {
      case 'UNILEVER':
        // Gets a for 3 for 2 deal on Classic Ads
        break;
      case 'APPLE':
        // Gets a discount on Standout Ads where the price drops to $299.99 per ad 
        break;
      case 'NIKE':
        // Gets a discount on Premium Ads where 4 or more are purchased. The price drops to $379.99 per ad
        break;
      case 'FORD':
        /*
            -Gets a 5 for 4 deal on Classic Ads
            - Gets a discount on Standout Ads where the price drops to $309.99 per ad
            - Gets a discount on Premium Ads when 3 or more are purchased. The price drops
            to $389.99 per ad
        */
        break;
      default:
        break;
    }
  }

  render() {
    return (
      // <MuiThemeProvider muiTheme={muiTheme}>
        <div className="container">
          <div style={{ background: 'skyblue' }}>
            <Product selectedPlan={this.selectedPlan} id='classic' name="Classic Ad" price={269.99} />
            <Product selectedPlan={this.selectedPlan} id='standout' name="Standout Ad" price={322.99} />
            <Product selectedPlan={this.selectedPlan} id='premium' name="Premium Ad" price={394.99} />
          </div>
          <div>
            <RaisedButton
              label="Checkout"
              secondary={true}
              onTouchTap={this.checkout}
            />
          </div>
        </div>
      // </MuiThemeProvider>
    );
  }
}

export default Dashboard;