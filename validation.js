let form 		= document.querySelector(".form")
let username 	= document.querySelector("#username")
let password 	= document.querySelector("#password")
let seePassword = document.querySelector("#see-password")

// userPatter => up
let up = /^[a-zA-Z][\w._]{5,23}$/

// evaluateUser => eu
let eu = false

// evaluatePassword => ep
let ep = 0

form.addEventListener("submit", e => {
	if (!(eu && ep === 5)) {
		e.preventDefault()

		if (!eu) {
			console.log(form.username)
			form.username.classList.add("is-invalid")
		}

		if (ep !== 5) {
			form.password.classList.add("is-invalid")
		}
	}
})

form.username.addEventListener("keyup", e => {
	if (e.target.value) {
		username.textContent = e.target.value.toLowerCase()
		if (up.test(e.target.value)) {
			eu = true
			e.target.classList.add("is-valid")
			e.target.classList.remove("is-invalid")
		} else {
			eu = false
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

		ep = 0
		ep+= /[A-Z]/.test(e.target.value) ? 1 : 0;
		ep+= /[a-z]/.test(e.target.value) ? 1 : 0;
		ep+= /[0-9]/.test(e.target.value) ? 1 : 0;
		ep+= /[\W]/.test(e.target.value) ? 1 : 0;
		ep+= e.target.value.length >= 6 ? 1 : 0;

		if (ep === 5) {
			e.target.classList.add("is-valid")
			e.target.classList.remove("is-invalid")
		} else {
			e.target.classList.add("is-invalid")
		}
	} else {
		password.innerHTML = "<i>Please select a password</i>"
		seePassword.innerHTML = "<i>Please select a password</i>"
	}
})
