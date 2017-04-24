import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Snackbar from 'material-ui/Snackbar';

import Product from '../components/product/Product';
import ItemsList from '../components/ItemsList/ItemsList';

import './Dashboard.css';

/**
 * 
 * 
 * @class Dashboard
 * @extends {Component}
 */
class Dashboard extends Component {
  userInfo = { username: '' };
  userProducts = {
    classic: {
      price: 269.99,
      discountedPrice: 0,
      quantity: 0,
      itemAdded: 0,
      totalCost: 0,
      id: 'classic',
    },
    standout: {
      price: 322.99,
      discountedPrice: 0,
      quantity: 0,
      itemAdded: 0,
      totalCost: 0,
      id: 'standout'
    },
    premium: {
      price: 394.99,
      discountedPrice: 0,
      quantity: 0,
      itemAdded: 0,
      totalCost: 0,
      id: 'premium'
    },
  };

  specialDeals = {
    buyMoreGetMore: { status: false, applied: 0 },
    discountOnPrice: { status: false, applied: 0 },
  };


  /**
   * Creates an instance of Dashboard.
   * @param {any} props 
   * @param {any} context 
   * 
   * @memberOf Dashboard
   */
  constructor(props) {
    super(props);
    this.state = {
      openToast: false,
      toastMessage: '',
      userInfo: { username: '' },
      userProducts: this.userProducts,
    };

    this.checkout = this.checkout.bind(this);
    this.selectedPlan = this.selectedPlan.bind(this);
    this.verifyUserDeals = this.verifyUserDeals.bind(this);
    this.calculateTotalAmount = this.calculateTotalAmount.bind(this);
    this.showToast = this.showToast.bind(this);
    this.hideToast = this.hideToast.bind(this);
  }

  /**
   * 
   * 
   * 
   * @memberOf Dashboard
   */
  componentDidMount() {
    this.setUserInfo();
  }

  /**
   * 
   * 
   * 
   * @memberOf Dashboard
   */
  setUserInfo() {
    const location = this.props.location || {}
    if (location.state && location.state.user) {
      this.setState({ userInfo: location.state.user }, () => {
        console.log('calback => ', this.state.userInfo);
      });
    }
  }

  /**
   * 
   * 
   * @param {any} productDetail 
   * 
   * @memberOf Dashboard
   */
  selectedPlan(productDetail) {
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

  /**
   * 
   * 
   * 
   * @memberOf Dashboard
   */
  calculateTotalAmount() {
    for (let product in this.userProducts) {
      const { quantity, price } = this.userProducts[product];
      let totalCost = 0;
      if (quantity > 0) {
        if (this.userProducts[product].discountedPrice) {
          totalCost = parseFloat(this.userProducts[product].discountedPrice * quantity);
          this.userProducts[product].totalCost = totalCost;
        } else if (!this.userProducts[product]['freeItem']) {
          totalCost = parseFloat(price * quantity);
          this.userProducts[product].totalCost = totalCost;
        } else {
          console.log("nothing to calculate");
        }
      }
    }
    console.log('all ', this.userProducts);
  }


  /**
   * 
   * 
   * 
   * @memberOf Dashboard
   */
  checkout() {
    console.log('checkout');
  }

  /**
   * 
   * 
   * 
   * @memberOf Dashboard
   */
  verifyUserDeals(productId) {
    switch (this.state.userInfo.username.toUpperCase()) {
      case 'UNILEVER':
        this.applyUnileverDeals(productId);
        break;
      case 'APPLE':
        // Gets a discount on Standout Ads where the price drops to $299.99 per ad
        this.applyAppleDeals(productId);
        break;
      case 'NIKE':
        // Gets a discount on Premium Ads where 4 or more are purchased. The price drops to $379.99 per ad
        this.applyNikeDeals(productId);
        break;
      case 'FORD':
        /*
            - Gets a 5 for 4 deal on Classic Ads
            - Gets a discount on Standout Ads where the price drops to $309.99 per ad
            - Gets a discount on Premium Ads when 3 or more are purchased. The price drops
            to $389.99 per ad
        */
        this.applyFordDeals(productId);
        break;
      default:
        break;
    }
  }

  /**
   * 
   * 
   * @param {any} productId 
   * 
   * @memberOf Dashboard
   */
  applyFordDeals(productId) {
    if (productId === 'standout') {
      this.discountOnPrice(productId, 0, 309.99);
    } else if (productId === 'premium') {
      this.discountOnPrice(productId, 3, 389.99);
    } else if (productId === 'classic') {
      this.processBuyMoreGetMore(4, productId)
    } else {
      // do nothing
    }
  }

  /**
   * 
   * 
   * @param {any} productId 
   * 
   * @memberOf Dashboard
   */
  applyNikeDeals(productId) {
    if (productId === 'premium') {
      this.discountOnPrice(productId, 4, 379.99);
    } else {
      // do nothing
    }
  }

  /**
   * 
   * 
   * @param {any} productId 
   * 
   * @memberOf Dashboard
   */
  applyAppleDeals(productId) {
    if (productId === 'standout') {
      this.discountOnPrice(productId, 0, 299.99);
    } else {
      // do nothing
    }
  }

  /**
   * 
   * 
   * @param {any} productId 
   * 
   * @memberOf Dashboard
   */
  applyUnileverDeals(productId) {
    if (productId === 'classic') {
      this.processBuyMoreGetMore(2, productId)
    } else {
      // do nothing
    }
  }


  /**
   * 
   * 
   * @param {any} productId 
   * @param {any} quantity 
   * @param {any} discountedPrice 
   * 
   * @memberOf Dashboard
   */
  discountOnPrice(productId, quantity, discountedPrice) {
    if (this.userProducts[productId].quantity >= quantity) {
      this.userProducts[productId].discountedPrice = discountedPrice;
      const message = `Congrats! On buying ${this.userProducts[productId].quantity} items of ${productId} price drops to $${discountedPrice}.`
      this.showToast(message);
    }
    return this.userProducts[productId].discountedPrice;
  }

  /**
   * 
   * 
   * @param {any} buyNum 
   * @param {any} productId 
   * @returns 
   * 
   * @memberOf Dashboard
   */
  buyMoreGetMore(buyNum, productId) {
    let { itemAdded } = this.userProducts[productId];
    if (itemAdded % 2 === 0 && itemAdded >= buyNum) {
      const { applied, status } = this.specialDeals.buyMoreGetMore;
      const appliedCount = Math.floor(itemAdded / buyNum);
      this.specialDeals.buyMoreGetMore = Object.assign({}, this.specialDeals.buyMoreGetMore, { status: true, applied: appliedCount });
      const message = `Congrats! On buying ${buyNum} items of ${productId} you got one free item.`
      this.showToast(message);
      return true;
    } else {
      return false;
    }
  }

  /**
   * 
   * 
   * @param {any} buyNum 
   * @param {any} productId 
   * 
   * @memberOf Dashboard
   */
  processBuyMoreGetMore(buyNum, productId) {
    let totalCost = 0;
    if (this.buyMoreGetMore(buyNum, productId)) {
      const { price } = this.userProducts[productId];
      this.userProducts[productId].quantity = this.userProducts[productId].itemAdded + this.specialDeals['buyMoreGetMore'].applied;
      const actualCost = price * this.userProducts[productId].quantity;
      const discount = price * this.specialDeals['buyMoreGetMore'].applied;
      totalCost = actualCost - discount;
      this.userProducts[productId].totalCost = actualCost - discount;
      this.userProducts[productId].freeItem = this.specialDeals['buyMoreGetMore'].applied;
    } else {
      const { price, quantity, itemAdded } = this.userProducts[productId];
      totalCost = price * itemAdded;
      this.userProducts[productId].totalCost = totalCost
    };
  }


  /**
   * 
   * 
   * @param {any} message 
   * 
   * @memberOf Dashboard
   */
  showToast(message) {
    this.setState({
      openToast: true,
      toastMessage: message
    });
  }

  /**
   * 
   * 
   * 
   * @memberOf Dashboard
   */
  hideToast() {
    this.setState({
      openToast: false,
      toastMessage: ''
    });
  };

  /**
   * 
   * 
   * @returns 
   * 
   * @memberOf Dashboard
   */
  render() {
    const standOut = { background: "#00BCD4" };
    const standOutPrice = { background: "#fff", color: '#00BCD4' };
    const customPrice = { background: "rgb(255, 87, 34)", color: '#fff' };
    const customStyle = {};

    return (
      <div>
        <div className="container">
          <div className="container-item container-item-1">
            <Product selectedPlan={this.selectedPlan}
              id='classic'
              name="Classic Ad"
              price={269.99}
              customStyle={customStyle}
              customPrice={customPrice} />
            <Product
              selectedPlan={this.selectedPlan}
              id='standout'
              name="Standout Ad"
              price={322.99}
              customStyle={standOut}
              customPrice={standOutPrice} />
            <Product
              selectedPlan={this.selectedPlan}
              id='premium'
              name="Premium Ad"
              price={394.99}
              customStyle={customStyle}
              customPrice={customPrice} />
          </div>
          <div className="container-item container-item-2">
            <ItemsList checkout={this.checkout} userProducts={this.state.userProducts} />
          </div>
        </div>
        <Snackbar
          open={this.state.openToast}
          message={this.state.toastMessage}
          autoHideDuration={4000}
          onRequestClose={this.hideToast}
        />
        <p className="footer">
          &copy; copyrights
        </p>
      </div>
    );
  }
}

export default Dashboard;