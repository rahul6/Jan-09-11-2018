let arr = [1,2]
let [x,y] = arr
console.log(x,y);


let book = {
	title: "XML",
	price: 200,
	author: "Ron"
}
/*let title = book.title
let price = book.price
*/
//Destructuring
let { title, price } = book
console.log(title,price);



let model = "BMW"
let year = 2008

let car = {
	model: model,
	year: year,
	drive: function(){
		console.log(`Driving ${this.model}`);
	}
}
car.drive()

let newCar = { 
	model, 
	year, 
	drive(){
		console.log(`Driving ${this.model}`);	
	} 
}
console.log(newCar);
newCar.drive()