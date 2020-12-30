let form 		= document.querySelector(".form")
let username 	= document.querySelector("#username")
let password 	= document.querySelector("#password")
let seePassword = document.querySelector("#see-password")

// userPatter => up
let up = /^[a-zA-Z][\w._]{5,23}$/

form.addEventListener("submit", e => {
	e.preventDefault()
})

form.username.addEventListener("keyup", e => {
	if (e.target.value) {
		username.textContent = e.target.value.toLowerCase()
		if (up.test(e.target.value)) {
			e.target.classList.add("is-valid")
			e.target.classList.remove("is-invalid")
		} else {
			e.target.classList.add("is-invalid")
		}
	} else {
		username.innerHTML = '<i>Please write something</i>'
	}
})

form.password.addEventListener("keyup", e => {
	if (e.target.value) {
		password.textContent = "*".repeat(e.target.value.length)
		seePassword.textContent = e.target.value
	} else {
		password.innerHTML = "<i>Please select a password</i>"
		seePassword.innerHTML = "<i>Please select a password</i>"
	}
})