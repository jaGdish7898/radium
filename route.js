const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

//1) write an api to return array of movie on requeisting ==>http://localhost:3000/movies

router.get('/movies', function (req, res) {
    res.send(["kreesh","3 idoits","go goa gone"])
});



// 2) api to give movie at index + if index is>array.length retun "some mesaaga"
router.get('/movies/:index', function (req, res) {
        console.log(req.params)
        let value=req.params.index
        let array=["kreesh","3 idoits","go goa gone"]
        if (value>array.length){
            res.send("enter yogya index")
        }else{
            console.log(value)
            res.send(array[value])

        }
        console.log(value)
        res.send(array[value])
    });

// ) Write another api called GET /films. to return the array having objects containing id and movie.

router.get('/films', function (req, res) {

    res.send([
        {
            id:1,
            name:"the shining"},
        {
            id:2,
            name:"hero"},
        {
            id:3,
            name:"squid game"
        }
    ])
});
 

//now we will get id return oject containing that is and movies for that id:

router.get('/films/:index', function (req, res) {
    console.log(req.params)
    let value=req.params.index
    let array=[{id:1,name:"the shining"},{id:2,name:"hero"},{id:3,name:"squid game"}]
    if(value>array.length){
        res.send("give valied movie id")
    }else{
        res.send(array[value-1])

    }
    
    
});
   

module.exports = router;