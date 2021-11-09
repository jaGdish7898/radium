function log(name){
    console.log("hi"+" "+name);
}
function welcome(){
    console.log("hello welcome to my application!!!");
}
let url="www.google.com";
module.exports.log=log;
module.exports.welcome=welcome;
module.exports.url=url;