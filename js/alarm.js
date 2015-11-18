const alarmElement = document.getElementById('alarm');
const alarmTimes = [
	//new Date('2015-11-16 11:25 -0800')
];

function playAlarm() {
	alarmElement.currentTime = 0;
	alarmElement.play();
	console.log('Beep Beep');
}

function checkTime(time) {
	if(Date.now() >= time) {
		return playAlarm();
	}

	const diff = time - Date.now();
	console.log('%s seconds unitl alarm', diff/1000|0);
	setTimeout(playAlarm, diff);
}

function stopAlarm() {
	alarmElement.pause();
} 

alarmTimes.forEach(time => checkTime(time));
document.body.addEventListener('keypress', e => {
	// Spacebar
	if (e.keyCode == 32) {
		stopAlarm();
	}
});

// from brian j brennan https://twitter.com/brianloveswords/status/665169370906165248 


// $(document).ready(function() {

//     $("form#setTime").submit(function(event) {

//         var alarmSet = $("input#time").val();

        

//         $("#result p").text(result);

//         $("#result").show();
//         event.preventDefault();
//     });

// });

