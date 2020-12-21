let btn = document.querySelector("button")

btn.addEventListener("click", e => {
	e.target.textContent = "Clicked!"
	e.target.classList.add('btn-danger')
	alert("You clicked Button")
})