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
// router.post("/confirmOtp", cowinController.confirmOtp) 


router.get("/getWheather",cowinController.getWheather)
router.get("/londonTemp",cowinController.londonTemp)
router.get("/cityByTemp",cowinController.cityByTemp)

router.get("/getBitcoins",cowinController.getBitcoins,cowinController.addCoin)

 

module.exports = router; 