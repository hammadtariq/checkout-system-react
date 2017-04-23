import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';
import ActionHome from 'material-ui/svg-icons/action/home';

import './ItemsList.css';

const propTypes = {
    name: PropTypes.string,
    price: PropTypes.number
}

const defaultProps = {
    defaultProps
}

/**
 * 
 * 
 * @class ItemsList
 * @extends {Component}
 */
class ItemsList extends Component {
    /**
     * Creates an instance of ItemsList.
     * @param {any} props 
     * 
     * @memberOf ItemsList
     */
    constructor(props) {
        super(props)
        this.state = {
        }
        this.checkout = this.checkout.bind(this);
    }

    checkout() {
        this.props.checkout();
    }

    verifyDiscount(product) {
        if (product.discountedPrice) {
            return product.discountedPrice;
        } else {
            return product.price;
        }
    }

    createItemList() { 
        let items = [];
        let totalCost = 0;
        const { userProducts } = this.props;
        for (let key in userProducts) {
            if (userProducts[key].freeItem > 0) {
                userProducts[key].quantity = userProducts[key].itemAdded + userProducts[key].freeItem;
            }
            totalCost += userProducts[key].totalCost;
            for (let j = 0; j < userProducts[key].quantity; j++) {
                let label = userProducts[key].id;
                let price = '$' + this.verifyDiscount(userProducts[key]);
                if (j < userProducts[key].freeItem) {
                    label = userProducts[key].id;
                    price = 'Free';
                }
                items.push(<ListItem key={key + j} secondaryText={price} primaryText={label} rightIcon={<ActionHome />} />);
            }
        }

        return { totalCost: totalCost, items: items };
    }

    /**
     * 
     * 
     * @returns 
     * 
     * @memberOf ItemsList
     */
    render() {
        const products = this.createItemList()
        return (
            <div>
                <h3>
                    <span >Total: {products.totalCost}</span>
                    <span style={{ float: 'right' }}>
                        <RaisedButton
                            label="Checkout"
                            secondary={true}
                            onTouchTap={this.checkout}
                        />
                    </span>
                </h3>
                <hr />
                <List>
                    {products.items}
                </List>

            </div>
        )
    }
}

ItemsList.propTypes = propTypes

ItemsList.defaultProps = defaultProps

export default ItemsList
