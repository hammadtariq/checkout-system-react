import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Product from '../components/product/product';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 100,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
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
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <Dialog
            open={this.state.open}
            title="Super Secret Password"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            1-2-3-4-5
          </Dialog>
          <h1>Material-UI</h1>
          <h2>example project</h2>
          <RaisedButton
            label="Super Secret Password"
            secondary={true}
            onTouchTap={this.handleTouchTap}
          />
          <div style={{ background: 'skyblue' }}>
            <Product selectedPlan={this.selectedPlan} id='classic' name="Classic Ad" price={269.99} />
            <Product selectedPlan={this.selectedPlan} id='standout' name="Standout Ad" price={322.99} />
            <Product selectedPlan={this.selectedPlan} id='premium' name="Premium Ad" price={394.99} />
          </div>
          <div>
              <button onClick={this.checkout}>Checkout</button>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Dashboard;