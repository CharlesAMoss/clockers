function updateClock(){

	//pulls in curret time
	var now = new Date();

	//breaks out hour, minutes, and seconds form curret time
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();

	// afternoon? am or pm
	var meridiem = hours > 12 ? "pm" : "am";

	//formating
	if (hours > 12) {
		hours = hours - 12;
	}
	if (hours < 10) {
		hours = "&nbsp;" + hours;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	//gets element
	var elem = document.getElementById('clock');

	//sets the display of content
	elem.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + meridiem;
}

// from tristan waddington http://www.tristanwaddington.com/2010/08/javascript-clock/
