// let header = document.querySelector("#header")

// console.log(header.getAttribute("id"))
// header.setAttribute("title", "My header title!")

let links = document.querySelectorAll("a")

links.forEach(link => {
	href = link.getAttribute("href")
	link.setAttribute("href", href.replace("http://", "https://"))
	link.setAttribute("data-protocol", "SSL")
})