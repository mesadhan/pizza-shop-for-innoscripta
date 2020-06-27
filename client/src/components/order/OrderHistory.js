import React, { Component } from 'react';
import {orderHistory} from "../../actions/orderActions";
import {connect} from "react-redux";

class OrderHistory extends Component {

    componentDidMount() {
        this.props.orderHistory(this.props.match.params.id);
    }

    totalCost = (a,b) => {
        return Number(a) + Number(b);
    };

    formatDate = (date) => {
        const formattedDate = new Date(date);
        const month = formattedDate.getMonth() + 1;
        return formattedDate.getDate()+'-'+month+'-'+ formattedDate.getFullYear()
    }

    render() {
        const {orders} = this.props;

        return (<div data-test="orderHistoryComponent" className="orderHistoryComponent">

            <p>Order History Page</p>

            {
                orders.map(order=>

                    <div className="" key={order.id}>
                        <div className="" >
                            <div className="">
                                <h5 className="">Order date : { this.formatDate(order.createdAt)}</h5>
                                <div><strong>Pizzas Price:</strong> {order.pizzaCost} € </div>
                                <div><strong>Delivery Cost: </strong>{order.deliveryCost} € </div>
                                <div><strong>Total Paid : </strong> {this.totalCost(order.pizzaCost, order.deliveryCost) } € </div>
                            </div>
                        </div>
                    </div>

                )
            }

        </div>)
    }
}

const mapStateToProps = (state) => ({
    orders: state.orders,
    auth: state.auth
});

export default connect(mapStateToProps,{orderHistory})(OrderHistory);