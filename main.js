
let clockTimer;

function startClock() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    m = timeProper(m);
    s = timeProper(s);

    document.getElementById('hour').innerHTML = h;
    document.getElementById('minute').innerHTML = m;
    document.getElementById('sec').innerHTML = s;

    // Store the timer ID so it can be cleared later
    clockTimer = setTimeout(startClock, 1000);

    function timeProper(i) {
        if (i < 10) { i = "0" + i; }
        return i;
    }
}



function stop(){
    clearTimeout(clockTimer);
    document.getElementById('stopbtn').classList.add('stoped');
}
function play(){
    startClock();
    document.getElementById('stopbtn').classList.remove('stoped');
}
