// let lists = document.querySelectorAll("li")

// lists.forEach(list => {
// 	// list.innerText += " new"
// 	// list.innerHTML += ` <span class="badge badge-danger">new</span>`
// 	list.textContent += " new"
// })

// let list = document.querySelector("li")

// console.log(list.innerText)
// console.log(list.textContent)

let lists = document.querySelectorAll("li")

lists.forEach(list => {
	if (list.textContent.includes(" new")) {
		list.innerHTML += ` <span class="badge badge-danger">new</span>`
	}
})