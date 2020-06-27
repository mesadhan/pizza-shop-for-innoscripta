import {returnErrors} from './errorActions';

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';


// Check token & load user
export const loadUser = () => (dispatch, getState) => {
    dispatch({type: USER_LOADING});      // User loading

    let resStatus = 0;
    fetch('http://localhost:8080/api/users/user', {
        method: 'GET',
        headers: tokenConfig(getState)
    }).then(function(response) {
        resStatus = response.status;
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    }).then( (res) => {
        dispatch({
            type: USER_LOADED, payload: res
        })

    }).catch((err) => {
        dispatch(returnErrors(err, resStatus));
        dispatch({ type: AUTH_ERROR});
    });
};


export const login = ({email, password}) => (dispatch) => {
    const headers = {
        'Content-Type': 'application/json'
    };
    const body = JSON.stringify({email, password});


    let resStatus = 0;
    fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: headers,
        body: body,
    }).then(response => {
        resStatus = response.status;
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();

    }).then(res => {

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res
        })
    }).catch((err) => {

        dispatch( returnErrors(err, resStatus, 'LOGIN_FAIL') );
        dispatch({ type: LOGIN_FAIL });
    });
};


export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT_SUCCESS
    });
};


export const tokenConfig = (getState) => {
    const token = getState().auth.token;        // Get token from localstorage

    const headers = {
        'Content-type': 'application/json'
    };

    // If token, add to headers
    if (token) {
        headers['x-auth-token'] = token;
    }

    return headers;
};

export const register = ({username, email, password}) => (dispatch) => {

    const headers = {
        'Content-Type': 'application/json'
    };

    const body = JSON.stringify({username, email, password});

    fetch('http://localhost:8080/api/users/register', {
        method: 'POST', // or 'PUT'
        headers: headers,
        body: body,
    }).then(response => response.json()).then(res => {
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res
        })
    }).catch((err) => {

        dispatch(returnErrors(err, err.status, 'REGISTER_FAIL'));

        dispatch({type: REGISTER_FAIL});
    });
};
