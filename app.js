const  express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const routePrefix = '/api';


// default routes
app.get(`/`, async (req, res) => res.status(200).json({ message: 'Hello! from Pizza Shop.' }));


// sub-routes
const UserRoutes = require('./routes/users');





// routes
app.use(`${routePrefix}/users`, UserRoutes);






module.exports = app;