const express = require('express');
const router = express.Router();

const auth = require('../middelware/auth');
const db = require('../models/index');




// Place an order
router.post('/', (req, res) => {
    const {name, surname, phone, address, pizzas, zipcode, userId, pizzaCost, deliveryCost}  = req.body;

    if(!name || !surname || !address || !zipcode ){
        return res.status(400).json({ msg: 'Please enter all required fields' });
    }

    db.Order.create({
        name, surname, phone, address, pizzas, zipcode, userId, pizzaCost, deliveryCost
    }).then(order=>res.send(order))
        .catch(err=>console.log(err));

});


router.get('/history/:id', auth,async (req,res)=>{

    const id =  req.params.id;
    if(id) {
        const historyOfOrders = await db.Order.findAll({where:{userId:id}});
        res.send(historyOfOrders);
    }else{
        res.send('no user id ');
    }

});


module.exports = router;