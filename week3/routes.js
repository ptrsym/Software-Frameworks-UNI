const express = require('express');
const router = express.Router();
const path = require('path');

//hardcoded array to simulate a database of values
const users = [
    {username: "garf@fat.com.au", password: "123"},
    {username: "jon@fat.com.au", password: "456"},
    {username: "odie@fat.com.au", password: "789"}
]

router.get('/account', function (req, res){
    res.sendFile(path.join(__dirname, 'www', 'account.html'));
});

router.get('/login', function (req, res){
    res.sendFile(path.join(__dirname, 'www', 'login.html'));
});

router.post('/login', function (req, res) {
    const {username, password} = req.body;
    const isValid = users.some(user => user.username === username && user.password === password);

    if (isValid){
        res.json({valid: true});
    } else {
        res.json({valid: false});
    }
});


module.exports = router;