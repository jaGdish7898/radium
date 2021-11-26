const express = require('express');
const router = express.Router();
const cowinController= require("../controllers/cowinController")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get("/cowin/states", cowinController.getStatesList)
router.get("/cowin/districts/:stateId", cowinController.getDistrictsList)
router.get("/cowin/centers", cowinController.getByPin)
router.post("/cowin/getOtp", cowinController.getOtp)
router.get("/getBitcoins",cowinController.getBitcoins) 

//----------------------------------------------------------------------------------------------------
router.get("/getWheather",cowinController.getWheather)
router.get("/londonTemp",cowinController.londonTemp)
router.get("/cityByTemp",cowinController.cityByTemp) 

 

 

module.exports = router;  