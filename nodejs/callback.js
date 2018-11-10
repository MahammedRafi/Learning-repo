console.log("User 1 request");
setTimeout(querieddatabase,5000);
console.log("User 2 request");
setTimeout(querieddatabase,5000);
console.log("User 3 request");
setTimeout(querieddatabase,5000);

function querieddatabase(){
	console.log("Queried data");
}
