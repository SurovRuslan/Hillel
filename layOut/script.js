menu.onclick = function myFunction() {
    var x = document.getElementById("myTopnav");

    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};


var fullDate = new Date ();
var day = fullDate.toLocaleString('en-US', {weekday: "long"});
var month = fullDate.toLocaleString('en-US', {month: "long"});
var date = fullDate.getDate();
var year = fullDate.getFullYear();
var hour = fullDate.getHours();
var minute = fullDate.getMinutes();
var second = fullDate.getSeconds();
var millisecond = fullDate.getMilliseconds();
var today = `Date: ${day} ${month} ${date} ${year}
 Time: ${hour} : ${minute} : ${second}`;



var buttonDate = document.createElement("button");
buttonDate.id = "myButton";
var dateTable = document.getElementById("dateTable");
dateTable.appendChild(buttonDate);
buttonDate.innerHTML = today;



