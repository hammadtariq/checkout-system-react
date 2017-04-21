import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import './Product.css';

const propTypes = {
    name: PropTypes.string,
    price: PropTypes.number
}

const defaultProps = {
    defaultProps
}

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.selectPlan = this.selectPlan.bind(this);
    }

    selectPlan() {
        const { id, name, price } = this.props;
        const product = {
            id: id,
            name: name,
            price: price,
        };
        this.props.selectedPlan(product);
    }

    render() {
        const { name, price } = this.props;
        const mainBody = {
            float: 'left',
            padding: '10px',
            border: '1px solid #000',
            width: '200px',
            height: '500px',
            margin: '10px',
            textAlign: 'center',
        };

        const pricing = {
            width: '100px',
            height: '100px',
            borderRadius: '100%',
            background: 'yellow',
            display: 'inline-block'
        };

        return (
            <div style={mainBody}>
                <h2>{name}</h2>
                <p>plan description</p>
                <div style={pricing}>
                    <span style={{ fontWeight: 600, fontSize: 24 }}>${price}</span>
                </div>
                <ul style={{ listStyle: 'none' }}>
                    <li>a</li>
                    <li>b</li>
                    <li>c</li>
                </ul>
                <div>
                    <RaisedButton
                        label="Select Plan"
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
