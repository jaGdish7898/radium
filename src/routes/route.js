const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookCantroller=require("../controllers/bookCantroller");
const publisherController=require("../controllers/publisherController")


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

 //api's about books//
router.post('/createAuthor', authorController.createAuthor  );

router.get('/getAllBooks',  bookCantroller.getAllBook  );

//api's about author
router.post("/addThisBook",bookCantroller.addThisBook);

//api's about publisher r
router.post("/addPublisher",publisherController.addPublisher)











router.post("/getById",authorController.getById)

module.exports = router;