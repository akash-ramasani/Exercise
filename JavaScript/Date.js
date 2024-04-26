const date = new Date();

document.getElementById("completeDate").innerHTML = date;

// Date Methods
document.getElementById("day").innerHTML = date.getDay();
document.getElementById("date").innerHTML = date.getDate();
document.getElementById("month").innerHTML = date.getMonth() + 1;
document.getElementById("fullYear").innerHTML = date.getFullYear();

document.getElementById("time").innerHTML = date.getTime();
document.getElementById("hours").innerHTML = date.getHours();
document.getElementById("minutes").innerHTML = date.getMinutes();
document.getElementById("seconds").innerHTML = date.getSeconds();

document.getElementById("timeString").innerHTML = date.toTimeString();
document.getElementById("dateString").innerHTML = date.toDateString();
document.getElementById("utcString").innerHTML = date.toUTCString();
document.getElementById("isoString").innerHTML = date.toISOString();