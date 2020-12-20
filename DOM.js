// let header = document.querySelector("#header")

// header.classList.add("mb-5")
// header.classList.remove("btn-success")
// header.classList.toggle("btn-danger")

let lists = document.querySelectorAll("li")

lists.forEach(list => {
	if (list.textContent.includes("success")) {
		list.classList.add('text-success')
	}
	if (list.textContent.includes("danger")) {
		list.classList.add('text-danger')
	}
})