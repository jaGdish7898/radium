const axios = require("axios");
const coinModel = require("../Models/coinModels");


// res.status(200). send( { data: userDetails } )

const getStatesList = async function (req, res) {
  try {
    let options = {
      method: "get",
      url: "http://cdn-api.co-vin.in/api/v2/admin/location/states" 
    };
    const cowinStates = await axios(options);

    console.log(cowinStates);
    let states = cowinStates.data;
    res.status(200).send({ msg: "Successfully fetched data", data:states}); 

  }
  catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: "Some error occured" });
  }

};

//---------------------------------------------------------------------------------------------------------------

const getDistrictsList = async function (req, res) { 

  try {
    let id = req.params.stateId
    console.log(" state: ", id)

    let options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}` //plz take 5 mins to revise template literals here
    }
    let response = await axios(options)

    let districts = response.data

    console.log(response.data) 
    res.status(200).send({ msg: "Success", data: districts })

  }  
  catch (err) {
    console.log(err.message)
    res.status(500).send({ msg: "Something went wrong" })
  }
}

//-------------------------------------------------------------------------------------------------------------

const getByPin = async function (req, res) {

  try {

    let pin = req.query.pincode
    let date = req.query.date

    let options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
    }
    let response = await axios(options)

 

    let centers = response.data
    console.log(centers)
    res.status(200).send({ msg: "Success", data: centers })

  }
  catch (err) {
    console.log(err.message)
    res.status(500).send({ msg: "Something went wrong" })
  }
}

//----------------------------------------------------------------------------------------------------------------

const getOtp = async function (req, res) {

  try {

    let options = {
      method: "post", // method has to be post
      url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
      data: { "mobile": req.body.mobile } // we are sending the json body in the data 
    }
    let response = await axios(options)

    let id = response.data
    res.status(200).send({ msg: "Success", data: id })

  }
  catch (err) {
    console.log(err.message,)
    res.status(500).send({ msg: "Something went wrong" })
  }
}

//--------------------------------------------------------------------------------------------------------------

const getWheather = async function (req, res) {
  console.log(req.query.city)
  console.log(req.query.token)

  let options = {
    method: "get",
    url: `http://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${req.query.token}`

  }
  let response = await axios(options)
  console.log(response);
  console.log("ok");
  res.send(response.data)

}
//--------------------------------------------------------------------------------------------------------

const londonTemp=async function(req,res){
  let options = {
    method: "get",
    url: `http://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${req.query.token}`

  }
  let response = await axios(options)
  console.log(response);
  console.log("ok");
  res.send({"temp OF lONDON":response.data.main.temp})

}

//--------------------------------------------------------------------------------------------------------------
const cityByTemp=async function (req,res){
  let cities=["London","Chennai","Delhi","Mumbai","Bengaluru","Moscow","Kolkata"]
  let array=[];
  for (let i=0;i<cities.length;i++){
    let options = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=f1a93c7f2832ca822dc0920253b1614a`
    }
    
  
  let response = await axios(options)
  array.push({"city":cities[i],"temprature":response.data.main.temp})
  
  }
  array.sort((x,y)=>x.temprature-y.temprature)
  res.send(array)
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] 



const getBitcoins=async function(req,res){
 try{
  let options={
    methode:"get",
    url:"http://api.coincap.io/v2/assets",
    headers: {
      Authorization: 'Bearer ' + "bae5688d-fcbb-42d8-b5df-7a97c38c4a9f"
    }
  }
  let resp= await axios(options)
  let Data=resp.data.data;
  let sortedData=Data.sort((x,y)=>{return x.changePercent24Hr-y.changePercent24Hr})
  await coinModel.create(sortedData)

  
}
catch (err) {
  console.log(err.message,)
  res.status(500).send({ msg: "Something went wrong" })
}
}


let addCoin=async function(req,res){
  let Coins=Data;
  for(let i=0;i<Coins.length;i++){
    let singleCoin=Coins[i];
    await coinModel.create(singleCoin)
  }
  res.send("work done succesfully!!!!!")
}
module.exports.addCoin=addCoin
module.exports.getBitcoins=getBitcoins

module.exports.cityByTemp=cityByTemp
module.exports.londonTemp=londonTemp; 
 
module.exports.getStatesList = getStatesList;
module.exports.getDistrictsList = getDistrictsList;
module.exports.getByPin = getByPin;
module.exports.getOtp = getOtp;
module.exports.getWheather = getWheather