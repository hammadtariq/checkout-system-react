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
        this.selectPlan = this.selectPlan.bind(this);
    }

    selectPlan() {
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
            for (let j = 0; j < userProducts[key].quantity; j++) {
                items.push(<ListItem key={key+j} primaryText={userProducts[key].id} rightIcon={<ActionHome />} />);
            }
        }
        const check = items.map((element)=>{

        })

        return (
            <div>
                <List>
                    {items}
                </List>
            </div>
        )
    }
}

ItemsList.propTypes = propTypes

ItemsList.defaultProps = defaultProps

export default ItemsList
