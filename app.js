const  express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());



app.get('/', async (req, res) => {
    res.status(200).json({ message: 'Hello! From Node.' });
});

module.exports = app;