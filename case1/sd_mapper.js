"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Rami Hadey
   Date:   1/16/20

*/ 
//this shows the time and date 
var thisTime = new Date(/*2018, 1, 3, 15, 28, 0*/);
 
//this shows "thisTime" in a readable text string
var timeStr = thisTime.toLocaleString();

//puts the date and time into the proper id
document.getElementById("timeStamp").innerHTML = timeStr;
 
//finds the exact hours
var thisHour = thisTime.getHours();

//finds the exact months that show up in the date string
var thisMonth = thisTime.getMonth();

// step 10 math to rotates the position of the star 
var mapNum = (2 * thisMonth + thisHour) % 24;

// step 11 
var imgStr =  "<img src='sd_sky" + mapNum + ".png' />";

// step 12 this puts the pictures
document.getElementById("planisphere").insertAdjacentHTML("afterbegin",imgStr);

