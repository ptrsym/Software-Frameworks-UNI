const express = require('express');
const router = express();
const path = require('path');

router.get('/account', function (req, res){
    res.sendFile(path.join(__dirname, 'www', 'account.html'));
});

router.get('/login', function (req, res){
    res.sendFile(path.join(__dirname, 'www', 'login.html'));
});

module.exports = router;