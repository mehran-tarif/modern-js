let app = document.querySelector("#app")

async function getWeather (city) {
	let response = await fetch(
		`https://developers.parsijoo.ir/web-service/v1/weather/?type=search&city=${city}`,
		{
			headers: {
				"api-key": "c5c526265816404b9c60f578550ddd95"
			}
		})
	let data = await response.json()
	let now_temp = data.result.hava.summary.temp
	let today = data.result.hava.dayList[0]

	switch (today.condition) {
		case "آرام":
			today.color = "t1"
			break;
		case "نسیم":
			today.color = "t2"
			break;
		case "باد ملایم":
			today.color = "t3"
			break;
		case "باد شدید":
			today.color = "t4"
			break;
		case "طوفانی":
			today.color = "t5"
			break;
		default:
			today.color = "t1"
			break;
	}

	app.innerHTML = `
		<div class="card">
			<div class="weather-wrapper ${today.color}">
				<i style="font-size: 3rem;" class="wi ${today.symbol}"></i>
			</div>
			<div class="card-body text-center">
				<h2>${city}</h2>
				<small class="my-3 d-block">${today.condition}</small>
				<div>
					<button class="btn btn-danger">${today.max}</button>
					<button class="btn btn-secondary">${now_temp}</button>
					<button class="btn btn-primary">${today.min}</button>
				</div>
			</div>
		</div>
	`
}

let city = document.querySelector("#city")
city.addEventListener("submit", e=>{
	e.preventDefault()
	getWeather(e.target.city.value)
})