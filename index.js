// CountDown
function countDown(){

	var today = new Date();
	var evenDate = new Date("January 1,2019 00:00:00");


	var remTime = Math.abs(today.getTime() - evenDate.getTime());
	//1525987906757
	

	var sec = Math.floor(remTime/1000);
	var min = Math.floor(sec/60);
	var hrs = Math.floor(min/60);
	var days = Math.floor(hrs/24);

	hrs = hrs % 24;
	min%=60;
	sec%=60;

	hrs = (hrs<10) ? "0"+hrs : hrs;
	min = (min<10) ? "0"+min : min;
	sec = (sec<10) ? "0"+sec : sec;

 	document.getElementById("days").innerHTML = days ;
 	document.getElementById("hrs").innerHTML = hrs ;
 	document.getElementById("min").innerHTML = min ;
 	document.getElementById("sec").innerHTML = sec ;
	
	setTimeout(countDown,1000);

}

countDown();