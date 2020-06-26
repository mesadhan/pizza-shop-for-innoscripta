const express = require('express');
const router = express.Router();

const db = require('../models/index');
const User = require('../models/user');

const config = require('config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middelware/auth');


router.post('/register', async (req, res) => {
    const {username,email,password}   = req.body;

    // data existence validation
    if (!username || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        const user = await db.User.findOne( { where: { email} });
        if (user) throw Error('User already exists');

        const salt = await bcrypt.genSalt(10);
        if (!salt) throw Error('Something went wrong with bcrypt');

        const hash = await bcrypt.hash(password, salt);
        if (!hash) throw Error('Something went wrong hashing the password');

        const savedUser =  await db.User.create({username,email,password:hash});

        if (!savedUser) throw Error('Something went wrong saving the user');

        const token = jwt.sign({ id: savedUser.id }, config.get('jwtSecret'), {
            expiresIn: 3600
        });

        res.status(200).json({
            token,
            user: {
                id: savedUser.id,
                username: savedUser.username,
                email: savedUser.email
            }
        });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }

});

// login a user
router.post('/login', async (req, res) => {
    const {email,password}   = req.body;

    // data existence validation
    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        // Check for existing user
        const user = await db.User.findOne({ where: { email} });
        if (!user) throw Error('User Does not exist');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw Error('Invalid credentials');

        const token = jwt.sign({ id: user.id }, config.get('jwtSecret'), { expiresIn: 3600 });
        if (!token) throw Error('Couldnt sign the token');

        res.status(200).json({
            token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email
            }
        });
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }

});


// Get The current logged in user
router.get('/user', auth, async (req, res) => {
    try {
        const user = await db.User.findByPk(req.user.id);
        if (!user) throw Error('User Does not exist');
        res.json(user);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
});


router.get('/', async (req, res) => {
    res.status(200).json({ message: 'Hello From Users' });
});


module.exports = router;