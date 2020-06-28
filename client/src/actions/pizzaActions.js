import {FETCH_PIZZAS} from './types';

export const fetchPizzas = () => async dispatch => {

   /* const res = [
        {id: 1, name: "This title is long for testing", description: "Description", price: "22", img: "https://www.delonghi.com/Global/recipes/multifry/97.jpg", createdAt: "", updatedAt: ""},
        {id: 2, name: "title", description: "Description", price: "22", img: "https://www.delonghi.com/Global/recipes/multifry/97.jpg", createdAt: "", updatedAt: ""},
        {id: 3, name: "title", description: "Description", price: "22", img: "https://www.delonghi.com/Global/recipes/multifry/97.jpg", createdAt: "", updatedAt: ""},
        {id: 4, name: "title", description: "Description", price: "22", img: "https://www.delonghi.com/Global/recipes/multifry/97.jpg", createdAt: "", updatedAt: ""},
        {id: 5, name: "title", description: "Description", price: "22", img: "https://www.delonghi.com/Global/recipes/multifry/97.jpg", createdAt: "", updatedAt: ""},
        {id: 6, name: "title", description: "Description", price: "22", img: "https://www.delonghi.com/Global/recipes/multifry/97.jpg", createdAt: "", updatedAt: ""},
        {id: 7, name: "title", description: "Description", price: "22", img: "https://www.delonghi.com/Global/recipes/multifry/97.jpg", createdAt: "", updatedAt: ""},
        {id: 8, name: "title", description: "Description", price: "22", img: "https://www.delonghi.com/Global/recipes/multifry/97.jpg", createdAt: "", updatedAt: ""},
    ]
    dispatch({ type: FETCH_PIZZAS, payload: res });
    */


    const headers = {
        'Content-type': 'application/json'
    };

   await fetch(`/api/pizzas`, {
        method: 'GET',
        headers: headers
    }).then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    }).then( (res) => {

       dispatch({ type: FETCH_PIZZAS, payload: res });
    });

};
