import React, { Component } from 'react';
import {connect} from "react-redux";
import {addToCart} from '../actions/cartActions';

class Pizza extends Component {
    render() {
        const {id, name, description, price, img, qnt} = this.props
        let imageFullUrl = '/static/' + img;

        return (
            <div data-test="pizzaComponent" className="pizzaComponent" style={{display: 'flex'}}>


                <div className="flex-item card-box" >
                    <img src={imageFullUrl} className="img-thumbnail" alt={name} />

                    <button style={{float: "right", margin: '5px'}} className="btn btn-primary btn-sm" onClick={() => this.props.addToCart(
                        this.props.cartItems, {id, name, description, price, img, qnt}
                    )}>Add To Cart</button>

                    <div style={{padding: '5px'}}>
                        <div style={{color: "#EA2D27"}} className="" >{name}</div>
                        <div className="" >{description}</div>
                        <div className="" ><strong>Price:</strong> €{price} ERO  |  ${ (price  * 1.12).toFixed(2)} USD </div>
                    </div>
                </div>

            </div>


        )

    }
}

//export default Pizza;
const mapStateToProps = (state) => ({
    cartItems: state.cart.items
});

export default connect( mapStateToProps, {addToCart} )(Pizza)