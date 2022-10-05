var ms = 0,
  s = 0,
  m = 0;
var counter;
var start = document.querySelector(".start");
var stop_timer = document.querySelector(".stop");
var reset_timer = document.querySelector(".reset");
var time = document.querySelector(".time");

start.addEventListener("click", function () {
  console.log(counter);
  if (!counter) {
    counter = setInterval(ms_run, 10);
  }
  function ms_run() {
    time.textContent = m + ":" + s + ":" + ms;
    ms++;
    if (ms == 100) {
      s++;
      ms = 0;
    }
    if (s == 60) {
      m++;
      s = 0;
    }
  }
});

stop_timer.addEventListener("click", function () {
  clearInterval(counter);
  counter = false;
});
reset_timer.addEventListener("click", function () {
  time.textContent = "00:00:00";
  (ms = 0), (s = 0), (m = 0);
  clearInterval(counter);
  counter = false;
});
