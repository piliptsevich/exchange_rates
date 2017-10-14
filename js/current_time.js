$(document).ready(function() {
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  function startTime() {
    var today = new Date();
    var day = today.getDate();
    var weekday = today.getDay();
    var sWeekday;
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    // add a zero in front of numbers<10
    minute = checkTime(minute);
    second = checkTime(second);

    switch(weekday){
      case 0:
        sWeekday = "MON";
        break;
      case 1:
        sWeekday = "TUE";
        break;
      case 2:
        sWeekday = "Wed";
        break;
      case 3:
        sWeekday = "THU";
        break;
      case 4:
        sWeekday = "FRI";
        break;
      case 5:
        sWeekday = "SAT";
        break;
      case 6:
        sWeekday = "SUN";
        break;
      default: 
        console.log("err current_time.js");
    }

    document.getElementById('current_time').innerHTML = sWeekday + " " + hour + ":" + minute + ":" + second;
    t = setTimeout(function() {
      startTime()
    }, 500);
  }
  startTime();
});