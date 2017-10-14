$(document).ready(function() {
  function showRate(checkboxId){
    var className = checkboxId;
    // var id = checkboxId.substring(0, checkboxId.length-1);
    if(document.getElementById(checkboxId).checked == false){
      var element = document.getElementsByClassName(className);
      element[0].style.display = "none";
    }
    else{
      var element = document.getElementsByClassName(className);
      element[0].style.display = "inline-block";
    }
  }

  function openNav() {
    if($(window).width() > 992){
      document.getElementById("mySidenav").style.width = "25%";
    }
    else{
      document.getElementById("mySidenav").style.width = "100%";
    }
  }

  function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
  }

    function changeColor(classList){
      var element = document.getElementById("content");
      if(classList[1] == "dark-theme"){
        element.classList.remove("white-theme");
        element.classList.add("dark-theme");
      }
      if(classList[1] == "white-theme"){
        element.classList.remove("dark-theme");
        element.classList.add("white-theme");
      }
    }
});