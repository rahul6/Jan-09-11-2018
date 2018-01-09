let arr = []
let arr2 = [1,2,3,4]
for(var i=0;i<arr2.length;i++){
	console.log(arr2[i]);
}
let capitals = []
capitals["India"] = "New Delhi"
capitals["UK"] = "London"
capitals["France"] = "Paris"

for(var key in capitals){
	console.log(key + "-> " + capitals[key]);
}