var events = require("events");

var eventEmitter = new events.EventEmitter();

var ringbell = function(){
	console.log("ring ring ring");
	eventEmitter.emit("bellrings", "welcome");
}

eventEmitter.on("doorOpen", ringbell);
eventEmitter.on("bellrings", function(message){
	console.log(message);
});
eventEmitter.emit("doorOpen");