var fs =require("fs");

fs.readFile('calc.js', function(err, data){
	if(err){
		console.log(err);
	}
	else{
		console.log("Async data:"+data.toString());
	}
});

var dat = fs.readFileSync('calc.js')
	console.log("Synch data : "+dat.toString());
	console.log("This is end");

	