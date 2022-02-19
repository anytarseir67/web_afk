let seconds = 0;

setInterval(_timer, 1000);

function _timer () {
    var timer = document.getElementById("timer");

    var date = new Date(null);
    date.setSeconds(seconds);
    var result = date.toISOString().substr(11, 8);

    timer.innerHTML = "~ " + result + " elapesed";
    seconds += 1;

    if (seconds == 1) {
        var positionInfo = timer.getBoundingClientRect();
        var width = positionInfo.width / 2;
        timer.style.left = "" + (screen.availWidth / 2) - width + "px";
        timer.style.opacity = "100%";
    }
}

function afk () {
    var _afk = document.getElementById("afk");
    var positionInfo = _afk.getBoundingClientRect();
    var width = positionInfo.width / 2;
    _afk.style.left = "" + (screen.availWidth / 2) - width + "px";
}
afk();