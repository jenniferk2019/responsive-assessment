$(document).ready(function(){

    //Sync checkboxes using jQuery functionality
    //Check or Uncheck All checkboxes
    var chk1 = $("#checkbox1");
    var chk2 = $("#checkbox2");
    console.log(chk1);
    
    chk1.on("change", function() {
        chk2.prop("checked", this.checked);
    });
    
    //Countdown timer:
    var countdownElement = document.getElementById("countdown");
    var end = new Date("September 26, 2019 12:00:00 AM").getTime();
    
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;
    
    function showRemaining() {
        var now = new Date().getTime();
        var distance = end - now;
            if (distance < 0) {
                clearInterval(timer);
                countdownElement.innerHTML = "Time's Up!"
                return;
            }
    
            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);
            countdownElement.innerHTML = days + " Days ";
            countdownElement.innerHTML += hours + " Hrs ";
            countdownElement.innerHTML += minutes + " Mins ";
            countdownElement.innerHTML += seconds + " Secs ";
       }
    
       timer = setInterval(showRemaining,1000);
    
    //Possible API server endpoint call??
    //call by btn btn-lg
    //require/run node.js to access
    //import the authentication from "https://bl45immth4.execute-api.us-east-1.amazonaws.com/production/"
    //export a default '{' alert when the buttons are hit (if check-ticks are not checked):
    //data() return { "submitok\" a message: "Congratulations! Your spot is reserved\"}
    //if check-ticks are not checked { {\"submitbad\ then return "Oops! Looks like there is an error\"
    
    })
    
    
    