

const express = require('express');
const router = express.Router();



router.get('/', async (req, res) => {
    res.status(200).json({ data: 'Hello! From Pizza' });
});


module.exports = router;