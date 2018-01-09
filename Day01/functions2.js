//Rest arguments
function eat(...items){
	for(var i=0;i<items.length;i++){
		console.log(items[i]);
	}
	console.log(items);
}

eat('bread','rice');
eat('eggs','roti','ice cream');

//console.log(i);  //ERROR
let i = 12

//Function Hoisting
work(12)

function work(hours) {
	console.log(`Works ${hours} hours everyday`);
}
work()
work(12)
work(false)
work("I","hate","to","work")
