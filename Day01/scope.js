var k = 100
var k = "something"

const name = "Sam";


let j = 100
let j = "something else"
//var is function scoped
//let is block scoped
function doSomething(){
	var i = 102

	if(i > 100){
		var message = "Hello i is greater than 100"	
		let anotherMessage = "WTH is going on???"
	}
	else{
	
	}
	console.log(message)
	//console.log(anotherMessage);
}
doSomething()
