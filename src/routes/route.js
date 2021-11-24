const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const middleWare=require("../middleWares/localMiddleWare")





router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});


// Creating User
router.post('/createUser',UserController.createUser);
router.post('/login',UserController.login);
router.get('/user/:userId',middleWare.tokenCheaker,UserController.getUser)
router.put('/user/:userId',middleWare.tokenCheaker,UserController.update)
router.post("/getThis",UserController.getThis)
module.exports = router;