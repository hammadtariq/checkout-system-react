import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import { deepOrange500 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom'

import Product from '../components/product/Product';

import './Dashboard.css';

class Dashboard extends Component {
  userProducts = {
    classic: { price: '269.99', quantity: 0 },
    standout: { price: '322.99', quantity: 0 },
    premium: { price: '394.99', quantity: 0 },
  };

  specialDeals = {
    buyMoreGetMore: { status: false, applied: 0 },
    discountOnPrice: { status: false, applied: 0 },
  };

  constructor(props, context) {
    super(props, context);

    this.state = {

    };

    this.checkout = this.checkout.bind(this);
    this.selectedPlan = this.selectedPlan.bind(this);
    this.verifyUserDeals = this.verifyUserDeals.bind(this);
  }

  selectedPlan(productDetail) {
    console.log(productDetail);
    const p_id = productDetail.id;
    const p_info = this.userProducts[p_id]
    this.userProducts[p_id] = Object.assign({}, p_info, { quantity: p_info.quantity + 1 })
    console.log(this.userProducts);
  }

  checkout() {
    let checkoutInfo = [];
    this.verifyUserDeals();
    for (let product in this.userProducts) {
      const {quantity, price} = this.userProducts[product];
      let totalCost = 0;
      if(quantity > 0){
        checkoutInfo.push(this.userProducts[product]);
        if(this.userProducts[product] && this.userProducts[product]['discountedPrice']){
          console.log('discounted price found');
          totalCost = parseFloat(this.userProducts[product].discountedPrice * quantity);
          this.userProducts[product].totalCost = totalCost; 
        } else if(product !== 'classic') {
          totalCost = parseFloat(price * quantity);
          this.userProducts[product].totalCost = totalCost; 
        } else {
          console.log("default case");
        }
      }
    }
    console.log('selected products => ', checkoutInfo);
    console.log('all ',this.userProducts);
  }

  verifyUserDeals() {
    let user = 'FORD';
    switch (user) {
      case 'UNILEVER':
        this.processBuyMoreGetMore(2, 'classic')
        break;
      case 'APPLE':
        // Gets a discount on Standout Ads where the price drops to $299.99 per ad
        this.discountOnPrice('standout', 0, 299.99);
        break;
      case 'NIKE':
        // Gets a discount on Premium Ads where 4 or more are purchased. The price drops to $379.99 per ad
        this.discountOnPrice('premium', 4, 379.99);
        break;
      case 'FORD':
        /*
            -Gets a 5 for 4 deal on Classic Ads
            - Gets a discount on Standout Ads where the price drops to $309.99 per ad
            - Gets a discount on Premium Ads when 3 or more are purchased. The price drops
            to $389.99 per ad
        */
        this.discountOnPrice('standout', 0, 309.99);
        this.discountOnPrice('premium', 3, 389.99);
        this.processBuyMoreGetMore(4, 'classic')
        break;
      default:
        break;
    }
  }

  discountOnPrice(productId, quantity, discountedPrice) {
    if(this.userProducts[productId].quantity >= quantity){
      this.userProducts[productId].discountedPrice = discountedPrice;
    }
  }

  buyMoreGetMore(buyNum, productId) {
    const { quantity } = this.userProducts[productId];
    if (quantity >= buyNum) {
      const { applied, status } = this.specialDeals['buyMoreGetMore'];
      const appliedCount = Math.floor(quantity / buyNum);
      console.log('applied count => ',appliedCount);
      this.specialDeals['buyMoreGetMore'] = Object.assign({}, this.specialDeals['buyMoreGetMore'], { status: true, applied: appliedCount });
      this.userProducts[productId].quantity = this.userProducts[productId].quantity + appliedCount; 
      console.log('deal check', this.specialDeals['buyMoreGetMore'])
      console.log('quantity updated', this.userProducts[productId])
      return true;
    } else {
      return false;
    }
  }

  processBuyMoreGetMore(buyNum, productId) {
    let totalCost = 0;
    if(this.buyMoreGetMore(buyNum, productId)) {
        const { price, quantity } = this.userProducts[productId];
        const actualCost = price * quantity;
        const discount = price * this.specialDeals['buyMoreGetMore'].applied;
        totalCost = actualCost - discount;
        debugger;
        this.userProducts[productId].totalCost = actualCost - discount;
        console.log('actualCost => ',actualCost);
        console.log('after discount => ',totalCost);
    } else {
        const { price, quantity } = this.userProducts[productId];
        totalCost = price * quantity;
        this.userProducts[productId].totalCost = totalCost
        console.log('totalcost => ',totalCost);
    };
  }

  render() {
    return (
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
    );
  }
}

export default Dashboard;