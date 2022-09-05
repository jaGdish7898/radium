const express = require('express');

const router = express.Router();

router.get('/test1', function (req, res) {
    res.send('My first ever api!')
});
router.get('/test2', function (req, res) {
    res.send('My first ever api!')
});


module.exports = router;

