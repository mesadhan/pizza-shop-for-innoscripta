const  express = require('express');
const cors = require('cors');
//const db = require('./models/index');



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'))
app.use('/static', express.static('public'))   // access 'public' dir contents using 'static' route

const routePrefix = '/api';


//Test DB Connection
// db.authenticate()
//     .then(() => console.log('[message]', 'database connected successfully'))
//     .catch(error => console.log('[error]: ' + error));


// default routes
app.get(`/`, async (req, res) => res.status(200).json({ message: 'Hello! from Pizza Shop.' }));


// sub-routes
const UserRoutes = require('./routes/users');
const PizzasRoutes = require('./routes/pizzas');





// routes
app.use(`${routePrefix}/users`, UserRoutes);
app.use(`${routePrefix}/pizzas`, PizzasRoutes);






module.exports = app;