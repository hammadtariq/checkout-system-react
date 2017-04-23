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

    /**
     * 
     * 
     * @returns 
     * 
     * @memberOf ItemsList
     */
    render() {
        let items = [];
        const { name, price, userProducts } = this.props;
        for (let key in userProducts) {
            console.log('a ', key);
            if (userProducts[key].freeItem > 0) {
                userProducts[key].quantity = userProducts[key].itemAdded + userProducts[key].freeItem;
            }
            for (let j = 0; j < userProducts[key].quantity; j++) {
                console.log('b ', userProducts[key].id);
                items.push(<ListItem key={key + j} primaryText={userProducts[key].id} rightIcon={<ActionHome />} />);
            }
        }

        return (
            <div>
                <h3>My Cart</h3>
                <List>
                    {items}
                </List>
                <RaisedButton
                    label="Checkout"
                    secondary={true}
                    onTouchTap={this.checkout}
                />
            </div>
        )
    }
}

ItemsList.propTypes = propTypes

ItemsList.defaultProps = defaultProps

export default ItemsList
