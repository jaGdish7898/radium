const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const authorController= require("../controllers/authorController")
const bookCantroller=require("../controllers/bookCantroller");
const publisherController=require("../controllers/publisherController")


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
router.get('/justChill',  UserController.justChill );


// user apis
router.post('/createUser',  UserController.createUser  );
router.get('/getAllUsers',  UserController.getUsersData  );

 //api's about books
router.post('/createAuthor', authorController.createAuthor  );

router.get('/getAllBooks',  bookCantroller.getAllBook  );

//api's about author
router.post("/addThisBook",bookCantroller.addThisBook);

//api's about publisher
router.post("/addPublisher",publisherController.addPublisher)











router.post("/getById",authorController.getById)

module.exports = router;