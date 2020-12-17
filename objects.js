// let number1 = 20;
// let number2 = number1;

let student1 = {
	name: "Mehran",
	age: 23,
}

// let student2 = student1;
let student2 = JSON.parse(JSON.stringify(student1))

student2.age = 30;
student2.name = "Ali";

console.log(student1)
console.log(student2)