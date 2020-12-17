let student = {
	firstname: "Mehran",
	lastname: "Tarif",
	age: 23,
	fields: ["programming", "nursing"],
	status: true,

	fullname() {
		return `${this.firstname} ${this.lastname}`
	},

	sayHello() {
		console.log(`Hello ${this.fullname()}!`)
	},

	showFields() {
		this.fields.forEach((field, index) => {
			console.log(`${index + 1}. ${field}`)
		});
	}
}

// console.log(student.fullname())
// student.sayHello()
student.showFields()