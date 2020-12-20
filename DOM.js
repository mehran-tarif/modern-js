// let header = document.querySelector("#header")

// console.log(header.getAttribute("id"))
// header.setAttribute("title", "My header title!")

let links = document.querySelectorAll("a")

links.forEach(link => {
	// let href = link.getAttribute("href")
	// link.setAttribute("href", href.replace("http://", "https://"))
	// link.setAttribute("data-protocol", "SSL")
	// let href = link.href
	// link.href = href.replace("http://", "https://")
	// console.log(link.dataset.protocol)
	// console.log(href)
	// link.dataset.protocol2 = "SSL"

	// link.setAttribute("style", link.getAttribute("style") + "color: red; font-size: 20px")
	link.style.color = 'red'
	link.style.fontSize = '20px'
})