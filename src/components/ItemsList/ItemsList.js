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
        const { name, price } = this.props;
        return (
            <div>
                <List>
                    <ListItem primaryText="All mail" rightIcon={<ActionHome />} />
                    <ListItem primaryText="Trash" rightIcon={<ActionHome />} />
                    <ListItem primaryText="Spam" rightIcon={<ActionHome />} />
                    <ListItem primaryText="Follow up" rightIcon={<ActionHome />} />
                </List>
            </div>
        )
    }
}

ItemsList.propTypes = propTypes

ItemsList.defaultProps = defaultProps

export default ItemsList
