const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// witing global midware:

 let mid=function(req,res,next){
    let all=new Date();  //2021-11-20T08:20:03.330Z
    let date=all.getDate()
    let month=all.getMonth()+1;
    let year=all.getFullYear();
    let hour=all.getHours();
    let minutes=all.getMinutes();
    let seconds=all.getSeconds();
    
//LIKE THIS WE CAN SEPRATE THE OUTPUT OF NEW DATE
    let fullDate=date+"|"+month+"|"+year;
    let fullTime=hour+"|"+minutes+"|"+seconds;
    let ipOfApi=req.ip;
    let url=req.originalUrl;
    console.log(fullTime,ipOfApi,url)
    console.log(fullDate)
    // console.log(all.toLocaleDateString())
     next();
 }
 app.use(mid)







const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://user-open-to-all:hiPassword123@cluster0.xgk0k.mongodb.net/jagdishshinde-database?retryWrites=true&w=majority", {useNewUrlParser: true})
    .then(() => console.log('mongodb running on 27017'))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});