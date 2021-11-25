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
router.post("/confirmOtp", cowinController.confirmOtp)
module.exports = router;