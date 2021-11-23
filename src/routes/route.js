const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")





router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});


// Creating User
router.post('/createUser',UserController.createUser);
router.post('/login',UserController.login);
router.post('/user/:userId',UserController.getUser)
router.put('/user/:userId',UserController.update)

module.exports = router;