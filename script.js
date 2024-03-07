var startTime;
var interval;
var running = false;
var pause = false
var stopCount = 0
var dark = true

function start() {
  if (running) {
    document.getElementById('start').innerHTML="Start"
    clearInterval(interval);
    running = false;
    pause = true
  }
  else if(pause){
    stopCount=stopCount+1;
    updateTime(stopCount)
    document.getElementById('start').innerHTML="Pause"
    interval = setInterval(function() {
        stopCount=stopCount+1;
        updateTime(stopCount)
    }, 1000)
    running = true;
    pause = false
  } else {
    stopCount=stopCount+1;
    updateTime(stopCount)
    document.getElementById('start').innerHTML="Pause"
    startTime = new Date().getTime();
    interval = setInterval(function() {
        stopCount=stopCount+1;
        updateTime(stopCount)
    }, 1000)
    running = true;
  }
}

function updateTime(counter) {
  var currentTime = new Date().getTime();
  var elapsedTime = counter;
  var hours = Math.floor(elapsedTime / 3600);
  var minutes = Math.floor((elapsedTime % 3600) / 60);
  var seconds = elapsedTime % 60;
  console.log(elapsedTime)
  document.getElementById('stopWatch').innerHTML=formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds)
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function reset() {  
  clearInterval(interval);
  stopCount = 0
  document.getElementById('start').innerHTML="Start"
  document.getElementById('stopWatch').innerHTML="00:00:00";
  running = false;
  pause = false;
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    var circle = document.getElementById("container").classList
    if(dark){
        document.getElementById("mode").innerText="Light Mode"
        circle.remove("container")
        circle.add("container-dark")
    }
    else{
        document.getElementById("mode").innerText="Dark Mode"
       
        circle.remove("container-dark")
        circle.add("container")
    }
    dark=!dark
  }
  function StartWatch(){
      document.getElementById('stopWatch').innerHTML="00:00:00";
  }
  StartWatch()