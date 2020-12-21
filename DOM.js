let el = document.createElement("div")
document.querySelector(".content").prepend(el)

window.addEventListener('online', (event) => {
    el.textContent = "Online"
    el.className = "alert"
    el.classList.add("alert-success")
});

window.addEventListener('offline', (event) => {
    el.textContent = "Offline"
    el.className = "alert"
    el.classList.add("alert-danger")
});