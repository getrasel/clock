
let clockTimer = null; // Make sure it's globally scoped

function startClock() {
    // Check if the clock is already running to prevent multiple timers
    if (clockTimer !== null) {
        return;
    }

    function updateClock() {
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();

        m = timeProper(m);
        s = timeProper(s);

        document.getElementById('hour').innerHTML = h < 10 ? "0" + h : h;
        document.getElementById('minute').innerHTML = m;
        document.getElementById('sec').innerHTML = s;

        // Schedule the next update
        clockTimer = setTimeout(updateClock, 1000);
    }

    // Start the first update
    updateClock();

    function timeProper(i) {
        return i < 10 ? "0" + i : i;
    }
}

function stop() {
    if (clockTimer !== null) {
        clearTimeout(clockTimer);
        clockTimer = null; // Reset to null to indicate the clock is stopped
    }
    document.getElementById('stopbtn').classList.add('stoped');
    document.getElementById('playbtn').classList.remove('remove');
}

function play() {
    startClock();
    document.getElementById('stopbtn').classList.remove('stoped');
    document.getElementById('playbtn').classList.add('remove');
}


