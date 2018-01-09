class Employee {
	constructor(name,salary) {
		this.name = name
		this.salary = salary
	}
	work(){
		console.log(`${this.name} is sleeping`);
	}
}
class Manager extends Employee {
	constructor(name,salary,level) {
		super(name,salary)
	}
	work(){
		super.work()
		console.log(`${this.name} is snoring`);
	}
}
let e1 = new Employee("Sam",10000)
e1.work()
let m1 = new Manager("Ram",20000,5)
m1.work()