$(document).ready(function(){
	showTime();
});

function showTime(){
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	var imageUrl = "";

	if(h >= 0 && h <= 5) {
		imageUrl = "nacht.png";
	} else if (h >= 5 && h <= 11) {
		imageUrl = "ochtend.png";
	} else if (h >= 11 && h <= 17) {
		imageUrl = "middag.png";
	} else {
		imageUrl = "avond.png";
	}


	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;

	var time = h + ":" + m + ":" + s;
	document.getElementById("MyClockDisplay").innerText = time;

	$('body, .container').css('background-image', 'url(img/' + imageUrl + ')');

	setTimeout(showTime, 1000);
}