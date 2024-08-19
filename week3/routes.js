const express = require('express');
const router = express.Router();
const path = require('path');

//hardcoded array to simulate a database of values
let users = [
    {username: "garf@fat.com.au", password: "123"},
    {username: "jon@fat.com.au", password: "456"},
    {username: "odie@fat.com.au", password: "789"}
]

//default route of the site
router.get('/', function (req, res){
    res.sendFile(path.join(__dirname, 'www', 'login.html'));
});

//route to account page
router.get('/account', function (req, res){
    res.sendFile(path.join(__dirname, 'www', 'account.html'));
});

//route to login to the site
router.get('/login', function (req, res){
    res.sendFile(path.join(__dirname, 'www', 'login.html'));
});

//route to check user credentials
router.post('/login', function (req, res) {

    if (!req.body) {
        return res.sendStatus(400);
    }

    var user = {};
    user.username = req.body.username.trim();
    user.password = req.body.password.trim();

    console.log("Request Body:", req.body);
    console.log("parsed User:", user);
    
    // const {username, password} = req.body;
    // const isValid = users.some(user => user.username === username && user.password === password);

    if (users.some(u => u.username === user.username && u.password === user.password)) {
        res.json({valid: true});
    } else {
        res.json({valid: false});
    }

    // if (isValid){
    //     res.json({valid: true});
    // } else {
    //     res.json({valid: false});
    // }
});


module.exports = router;