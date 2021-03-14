let myClock = () => {
	let clock = document.querySelector("#clock")
	let myDate = new Date()
	clock.textContent = `${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`
}

myClock()

setInterval(myClock, 1000)