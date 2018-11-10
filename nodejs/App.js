var printStuff = function(stuff){
	console.log(stuff);
}




function mainFunction(anotherFunction, value){
	anotherFunction(value);
}
mainFunction(printStuff, "welcome");

console.log(__filename);
console.log(__dirname);

function printTimeout(){
	console.log("From settimeout");
}

setTimeout(printTimeout, 1000);


var printTCS = function(a){
console.log("TCS");
}

setTimeout(printTCS,5000);


function logTCS(){
	console.log("TCS");
}

function setTime(){
	setInterval(logTCS, 2000)
}	
setTimeout(setTime,10000);

var calc = require("./calc.js");
calc.add();
calc.sub();	