"use strict"
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Rami Hadey
   Date:  1/22/2020

   Filename:   ph_clock.js     

*/




var minsLeft = 30;

var secsLeft = 0;

var timeLeft = minsLeft * 60 + secsLeft;

//Starts the counter and adds a delay
var clockID = setInterval("countdown()", 1000);

/* ------------------------------------------------- */

function countdown(){
   //finds out how much mins left
   var minsLeft = Math.floor(timeLeft / 60);
   //finds out how much secs left
   var secsLeft = timeLeft - 60 * minsLeft;
   //set to add a 0 the number before
   var minsString = addLeadingZero(minsLeft);
   var secsString = addLeadingZero(secsLeft);
   //adds a 0 in front minutes and seconds 
   document.getElementById("minutes").innerHTML = minsString;
   document.getElementById("seconds").innerHTML = secsString;
   checkTimer();
   timeLeft --;
}

//stops the clock
function stopClock(){
   document.getElementById("TimeHead").insertAdjacentHTML("beforeend","<br />(Order Expired)");
   clearInterval(clockID);
}


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */
   
function checkTimer() {
   if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
   var numStr = (num < 10) ? ("0" + num) : "" + num;
   return numStr;
}
