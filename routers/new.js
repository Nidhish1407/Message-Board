const express = require('express');
const router = express.Router();

const {addMessage} = require('./index');

router.get('/', (req, res) => {
    res.render('form');
});

router.post('/', (req, res) => {
    console.log(req.body);
    addMessage({ text: req.body.message, user: req.body.user, date: new Date() });
    res.redirect('/');
});

module.exports = router;