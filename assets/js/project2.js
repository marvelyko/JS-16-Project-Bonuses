var current = document.querySelector(".current-time");
var alarm_time = document.querySelector(".alarm-time");
var alarm = document.querySelector(".alarm");

var a_hour = window.prompt("Enter hour:");
var a_minute = window.prompt("Enter minute:");
var a_second = window.prompt("Enter second:");

alarm_time.textContent = a_hour + ":" + a_minute + ":" + a_second;

function currentTime() {
  const d = new Date();
  let hour = d.getHours();
  let minute = d.getMinutes();
  let second = d.getSeconds();

  current.textContent = hour + ":" + minute + ":" + second;
  if (a_hour == hour && a_minute == minute && a_second == second) {
    alarm.textContent = "Alarm !!!";
  }
  setTimeout(currentTime, 1000);
}

currentTime();
