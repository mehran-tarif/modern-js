let popupBtns = document.querySelectorAll("button.popup-btn")

if (popupBtns) {
	var popupWrapper = document.createElement("div")
	popupWrapper.className = "popup-wrapper"
	document.body.prepend(popupWrapper)
}

popupBtns.forEach(popupBtn => {
	popupBtn.addEventListener("click", e => {
		let popup = popupBtn.nextElementSibling
		popup.classList.add("show")
		popupWrapper.classList.add("show")

		let popupCloseFunc = e => {
			popup.classList.remove("show")
			popupWrapper.classList.remove("show")
		}

		let popupCloses =document.querySelectorAll(".popup-close")
		popupCloses.forEach(popupClose => {
			popupClose.addEventListener("click", popupCloseFunc)
		})
		popupWrapper.addEventListener("click", popupCloseFunc)
	})
})