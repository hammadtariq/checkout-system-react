import React, { Component } from 'react'
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import './Product.css';

const propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    selectedPlan: PropTypes.func
}

const defaultProps = {
    name: '',
    price: '',
    selectedPlan: () => {}
}
/**
 * 
 * 
 * @class Product
 * @extends {Component}
 */
class Product extends Component {
    /**
     * Creates an instance of Product.
     * @param {any} props 
     * 
     * @memberOf Product
     */
    constructor(props) {
        super(props)
        this.state = {
        }
        this.selectPlan = this.selectPlan.bind(this);
    }

    /**
     * 
     * 
     * 
     * @memberOf Product
     */
    selectPlan() {
        const { id, name, price } = this.props;
        const product = {
            id: id,
            name: name,
            price: price,
        };
        // this.props.selectedPlan(product);
    }

    /**
     * 
     * 
     * @returns 
     * 
     * @memberOf Product
     */
    render() {
        const { name, price, customStyle, customPrice } = this.props;
        return (
            <div className="mainBody" style = {customStyle} >
                <h2>{name}</h2>
                <p>plan description</p>
                <div className="pricing" style={customPrice} >
                    <span className="price" >${price}</span>
                </div>
                <ul style={{ listStyle: 'none' }}>
                    <li>a</li>
                    <li>b</li>
                    <li>c</li>
                </ul>
                <div>
                    <RaisedButton
                        label="add"
                        secondary={true}
                        onTouchTap={this.selectPlan}
                    />
                </div>
            </div>
        )
    }
}

Product.propTypes = propTypes

Product.defaultProps = defaultProps

export default Product
