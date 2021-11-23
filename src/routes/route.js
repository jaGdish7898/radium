const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const localMiddleWare=require("../middleWares/localMiddleWare")
const productController= require("../controllers/productController")
const orderController= require("../controllers/orderController")



router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});


// Creating User
router.post('/createUser',localMiddleWare.mid1,UserController.createUser  );

//Creating Product
router.post('/addThisProduct',productController.createProduct  );

// GIVING ORDER
router.post('/newOrder',localMiddleWare.mid2,orderController.addNewOrder  );

module.exports = router;