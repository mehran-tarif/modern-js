var x = 1

let doSomeThing = () => {
	let set = document.querySelector("#set")
	set.textContent = `My counter: ${x++} secends.`
}

let stopDoingSomeThing = () => clearInterval(myInterval)

// setTimeout(
// 	doSomeThing, 3000
// )

let myInterval = setInterval(
	doSomeThing, 1000
)

// setTimeout(
// 	stopDoingSomeThing, 10000
// )

let btn = document.querySelector("#btn")
btn.addEventListener("click", stopDoingSomeThing)