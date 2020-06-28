import React, {Component} from 'react';
import {orderHistory} from "../../actions/orderActions";
import {connect} from "react-redux";
import './OrderHistory.scss';

class OrderHistory extends Component {


    componentDidMount() {
        this.props.orderHistory(this.props.match.params.id);
    }

    totalCost = (a, b) => {
        return Number(a) + Number(b);
    };

    formatDate = (date) => {
        const formattedDate = new Date(date);
        const month = formattedDate.getMonth() + 1;
        return formattedDate.getDate() + '-' + month + '-' + formattedDate.getFullYear()
    }

    render() {
        const {orders} = this.props;

        return (<div data-test="orderHistoryComponent" className="orderHistoryComponent">



            {orders.length > 0 &&

            <div className="card">
                <div className="card-header"> Order History Panel</div>
                <div className="card-body">


                <div className="">
                    <div className="row">
                        <div className="col-md-6 col-lg-6">

                                    <table className="table table-borderless table-responsive">
                                        <thead>
                                        <tr>
                                            <th>Order ID</th>
                                            <th>Order Date</th>
                                            <th>Pizza Price</th>
                                            <th>Delivery Cost</th>
                                            <th>Total Paid</th>
                                            {/*<th>Actions</th>*/}
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {orders.map(order =>
                                            <tr key={order.id}>

                                                <td>{this.formatDate(order.createdAt)}</td>
                                                <td>{order.pizzaCost} €</td>
                                                <td>{order.deliveryCost} €</td>
                                                <td>{this.totalCost(order.pizzaCost, order.deliveryCost)} €</td>
                                                <td>{order.id}</td>
                                            </tr>
                                        )}
                                        </tbody>
                                    </table>
                                </div>



                        </div>
                        <div className="col-md-6 col-lg-6">

                        </div>
                    </div>
                </div>

                {/*<div className="card-footer">Footer</div>*/}
            </div>
            }

        </div>)
    }
}

const mapStateToProps = (state) => ({
    orders: state.orders,
    auth: state.auth,
    error: state.error
});

export default connect(mapStateToProps, {orderHistory})(OrderHistory);