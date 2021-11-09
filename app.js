const obj=require("./logger.js");
obj.log("jagdish");
obj.welcome();
console.log("this is a google link:"+" "+obj.url);

// now calling from helper.js
const obj1=require("../util/helper.js")
console.log("from helper now:::::::::::");
obj1.getDate();
obj1.getMonth();
obj1.getInfo();
//now calling from formatter.js
const obj2=require("F:/PERTNER/validator/formatter.js")
console.log("from formatter now:::::::::::");
obj2.trim("   jagdish shinde       ");
obj2.changeToLower("JAGDISH shinDE");
obj2.changeToUpper("jagdish shinde");
// ********************************************************************
// console.log("**********by chunk ***************");
// const obj3=require("lodash");
// let k=obj3(["jan","feb","march","april","may","jun","july","aug","sept","oct","nov","dec"],4);
// console.log(k);
// console.log("*************************************************");
// let obj4=require("tail");
// console.log(obj4.tail([1,2,3,4,5,6,7,8,9,10],3));
console.log("<================ using chunk =====================>");
let k=["jan","feb","march","april","may","jun","july","aug","sept","oct","nov","dec"];
var chunk = require('chunk');
console.log(chunk(["jan","feb","march","april","may","jun","july","aug","sept","oct","nov","dec"],3));
// console.log("<================ using tail =====================>");
// // var tail=require("tail");
// tail = require('tail');
// let numbers=[1,2,3,4,5,6,7,8,9,10];
// // console.log(tail([1,2,3,4,5,6,7,8,9,10],1));
// console.log(tail([1, 2, 3]));
// import arrayUnion from 'array-union';
// console.log(arrayUnion([1, 1, 2, 3], [2, 3]))
console.log("<================ using chunk =====================>");
var union = require('arr-union');
console.log(union([1,2,3,4], [7,4], [25,3,7]));
console.log("<================ frompairs =====================>");
// let p=require("lodash")
// const pairs=require("frompairs");
// console.log(lodash.fromPairs(["key1","value"]));