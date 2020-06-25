import React, { Component } from 'react';
import './Menus.scss';
import {fetchPizzas} from '../actions/pizzaActions';
import { connect } from "react-redux";
import Pizza from "./Pizza";

class Menu extends Component {

    componentDidMount(){
        this.props.fetchPizzas();
    }

    render() {
        const {pizzas} = this.props.pizzas;

        return (
            <div data-test="menusComponent" className="menusComponent">
                <div className="menu-header">Menus Page</div>

                <div className="flex-container-row">

                    <div className="flex-item" style={{display:'flex'}}>
                        <div className="flex-container">
                            {
                                pizzas.map( pizza => <Pizza key={pizza.id} {...pizza}/>)
                            }
                        </div>

                        <div className="flex-item shopping-cart" style={{height: '100%', marginTop: '0', paddingTop: '0'}}>
                           {/*todo: card box need to implement*/}
                        </div>
                    </div>



                </div>


            </div>
        )

    }
}


const mapStateToProps = (state) => ({
    pizzas: state,
});

export default connect(mapStateToProps,{fetchPizzas})(Menu)