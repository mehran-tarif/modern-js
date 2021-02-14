// get todos from localStorage
let todos = localStorage.getItem("todos")

// try parse data or null
try {
	todos = JSON.parse(todos)
	todos = todos.length ? todos : null
} catch(e) {
	todos = null
}

// set default value if todos == null
if (!todos) {
	todos = [
		"Shopping",
		"Watch videos",
		"Like videos",
	]
	localStorage.setItem("todos", JSON.stringify(todos))
}

// func to create or update todos list in ui
function createTodos(todos) {
	let todosList = document.querySelector("#todos-list")
	todosList.innerHTML = ""

	// create list tag for each todo
	todos.forEach((todo, index) => {
		let li = document.createElement("li")
		li.className = "list-group-item"
		let content = document.createElement("span")
		content.textContent = todo
		let deleteBtn = document.createElement("img")
		deleteBtn.src = "media/delete.png"
		deleteBtn.alt = "delete icon"
		deleteBtn.className = 'float-right'

		// append content and deleteBtn to li
		li.append(content)
		li.append(deleteBtn)

		// append li to todosList
		todosList.append(li)

		// add deleteBtn functionality
		deleteBtn.addEventListener("click", e => {
			todos.splice(index, 1)
			localStorage.setItem("todos", JSON.stringify(todos))
			createTodos(todos)
		})
	});
}

createTodos(todos)