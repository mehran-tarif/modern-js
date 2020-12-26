let btn = document.querySelector("button.scroll")

window.addEventListener("scroll", e => {
	if (window.scrollY > 500 && window.scrollY < 2000) {
		btn.classList.add('show')
	} else {
		btn.classList.remove('show')
	}
})

btn.addEventListener("click", e => {
	window.scrollTo({top: 0, behavior: "smooth"})
})



let btn2 = document.querySelector("button.scroll2")
let el = document.querySelector("#Article")

window.addEventListener("scroll", e => {
	if (window.scrollY > 2000) {
		btn2.classList.add('show')
	} else {
		btn2.classList.remove('show')
	}
})

btn2.addEventListener("click", e => {
	el.scrollIntoView({top: 0, behavior: "smooth"})
})