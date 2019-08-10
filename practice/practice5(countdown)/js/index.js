var timeinterval=0;

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days'); /* select the days class within the clock class*/
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  updateClock();
  var timeinterval = setInterval(updateClock, 1000); /*setInterval(): repeatedly calls a function or executes a code snippet*/
   
  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
	daysSpan.value= ('0' + t.days).slice(-2);
    //hoursSpan.innerHTML = ('0' + t.hours).slice(-2); /* get the last 2 characters*/
	hoursSpan.value= ('0' + t.hours).slice(-2);
    //minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
	minutesSpan.value= ('0' + t.minutes).slice(-2);
    //secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
	secondsSpan.value= ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
}
function  resetCount(){
	//function updateClock(){}
	
	//var deadline=0;
	//var deadline = new Date(Date.parse(new Date()) + 1 * 24 * 60 * 60 * 1000); /*new Date(): current date and time; Date.parse(): returns the number of milliseconds since January 1, 1970, 00:00:00 UTC*/
	
	//deadline = new Date(Date.parse(new Date()) +days* 24 * 60 * 60 * 1000 + hours* 60 * 60 * 1000 + minutes* 60 * 1000 + second * 1000);
	
	//initializeClock('clockdiv', deadline);
	//window.clearInterval(timeinterval);
	//clearInterval(timeinterval);
	/*initializeClock('clockdiv', deadline);
	second = 0;
	minutes = 0;
	hours = 0;
	days = 0;
	return;*/
	//var deadline = new Date(Date.parse(new Date()) + 1 * 24 * 60 * 60 * 1000); /*new Date(): current date and time; Date.parse(): returns the number of milliseconds since January 1, 1970, 00:00:00 UTC*/
	/*var second = parseInt(document.getElementById("second").value);
	var minutes = parseInt(document.getElementById("minutes").value);
	var hours = parseInt(document.getElementById("hours").value);
	var days = parseInt(document.getElementById("days").value);
	deadline = new Date(Date.parse(new Date()) +days* 24 * 60 * 60 * 1000 + hours* 60 * 60 * 1000 + minutes* 60 * 1000 + second * 1000);
	
	initializeClock('clockdiv', deadline);*/
	return;
}

function  startCount(){
	
	var deadline = new Date(Date.parse(new Date()) + 1 * 24 * 60 * 60 * 1000); /*new Date(): current date and time; Date.parse(): returns the number of milliseconds since January 1, 1970, 00:00:00 UTC*/
	var second = parseInt(document.getElementById("second").value);
	var minutes = parseInt(document.getElementById("minutes").value);
	var hours = parseInt(document.getElementById("hours").value);
	var days = parseInt(document.getElementById("days").value);
	deadline = new Date(Date.parse(new Date()) +days* 24 * 60 * 60 * 1000 + hours* 60 * 60 * 1000 + minutes* 60 * 1000 + second * 1000);
	
	initializeClock('clockdiv', deadline);
	/*if (document.getElementById('').addEventListener('click', function(evt) )=='reseter') {
		second = 0;
	minutes = 0;
	hours = 0;
	days = 0;
	return;}
	else{return;}*/
	}
/*function startCase(){
	//if(){}
	//else if(){}
	//else(){}
	function Choice(elem) {
   var box = document.getElementById("box");
   if (elem.id == "start") {
     box.style.backgroundColor = "red";
   } 
   else if (elem.id == "reset") {
     box.style.backgroundColor = "green";
   } 
   else {
     return;
   };
 };
}*/
	



