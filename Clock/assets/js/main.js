function time() {
	const h1 = document.querySelector(".time");
	const date = new Date();

	const day = date.getDay();
	const month = date.getMonth();
	const year = date.getFullYear();

	const hour = date.getHours();
	const minute = date.getMinutes();
	const seconds = date.getSeconds();
	const milliSeconds = date.getMilliseconds();

	h1.innerHTML = `${formatDate(day)}/${formatDate(month)}/${year} - ${formatDate(hour)}:${formatDate(minute)}:${formatDate(seconds)}`;
}

function formatDate(num) {
	if (num <= 9) {
		return `0${num}`;
	} else {
		return num;
	}
}

setInterval(time, 1000);
time(date);