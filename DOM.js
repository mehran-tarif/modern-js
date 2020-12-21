let ul = document.querySelector("ul")

// Array.from(ul.children).forEach((li, index) => {
// 	if (index % 2 == 0) {
// 		li.style.color = 'red'
// 	} else {
// 		li.style.color = 'green'
// 	}
// })

// ul.parentElement.style.fontSize = '25px'

ul.previousElementSibling.style.color = 'red'
ul.nextElementSibling.style.color = 'green'
