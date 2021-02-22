function dateMate() {
	let date = new Date();
	let today = date.getDate();
	let month = date.getMonth();
	let year = date.getFullYear();
	if (today < 10) {
		today = `0${today}`;
	}
	if (month < 10) {
		month = `0${month + 1}`;
	}

	// date function start here
	const finalDate = `${today}-${month}-${year}`;
	const myDate = document.querySelector(".date");
	myDate.innerHTML = finalDate;
}
dateMate();

function timeMate() {
	let d = new Date();
	let hours = d.getHours();
	let minits = d.getMinutes();
	let soconds = d.getSeconds();
	let tf = "AM";
	if (hours === 0) {
		hours = 12;
		tf = "AM";
	}
	if (hours > 12) {
		hours = hours - 12;
		tf = "PM";
	}
	if (hours < 10) {
		hours = "0" + hours;
	}
	if (minits < 10) {
		minits = "0" + minits;
	}
	if (soconds < 10) {
		soconds = "0" + soconds;
	}
	const finalTime = `${hours}-${minits}-${soconds}`;

	const clock = document.getElementById("clock");
	const AP = document.getElementById("am-pm");
	clock.innerText = finalTime;
	AP.innerText = tf;
	setInterval(timeMate, 1000);
}
timeMate();
