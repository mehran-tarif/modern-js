let form 		= document.querySelector(".form")
let username 	= document.querySelector("#username")
let password 	= document.querySelector("#password")
let seePassword 	= document.querySelector("#see-password")

form.addEventListener("submit", e => {
	e.preventDefault()
})

form.username.addEventListener("keyup", e => {
	username.textContent = e.target.value.toLowerCase()
})

form.password.addEventListener("keyup", e => {
	password.textContent = "*".repeat(e.target.value.length)
	seePassword.textContent = e.target.value
})