let themes = document.querySelector(".themes")
let selection = document.querySelector("#selection")

Array.from(themes.children).forEach(theme => {
	theme.addEventListener("click", e => {
		let color = e.target.dataset.color
		document.body.className = color
		selection.textContent = color
	})
})