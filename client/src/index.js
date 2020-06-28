import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from "react-redux";
import { BrowserRouter as Router} from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';
import { loadUser } from './actions/authActions';


// create store
const cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")) : [];

const initState = { cart: { items: cartItems  } };
const store = createStore(rootReducer, initState, applyMiddleware(reduxThunk));
store.dispatch(loadUser());

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router> <App/> </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
