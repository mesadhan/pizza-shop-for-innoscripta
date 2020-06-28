const express = require('express');
const router = express.Router();

const db = require('../models/index');
//const User = require('../models/user');



// Get pizza list
router.get('/', (req, res) => {
    db.Pizza.findAll()
        .then(pizzas => res.send(pizzas))
        .catch(err => console.log(err))
});


// Add a Pizza
router.post('/add', (req, res) => {
    const {name, description, price, img} = req.body;

    db.Pizza.create({
        name, description, price, img
    }).then(pizza=>res.send(pizza)).catch(err=>console.log(err));
});


// router.get('/', async (req, res) => {
//     res.status(200).json({ data: 'Hello! From Pizza' });
// });


module.exports = router;