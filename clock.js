let clock = document.querySelector("#clock")
let myDate = new Date()
let myJDate = gregorian_to_jalali(
	myDate.getFullYear(),
	myDate.getMonth() + 1,
	myDate.getDate()
)
clock.textContent = `امسال سال ${myJDate[0]} است. امروز ماه ${myJDate[1]} و روز ${myJDate[2]} است`
