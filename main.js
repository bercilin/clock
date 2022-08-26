function showTime() {
    let time = new Date();
    let hours = time.getHours();
    let minute = time.getMinutes();
    let seconds = time.getSeconds();
    let session = document.getElementById('session');




    if (hours >= 12) {
        session.innerHTML = 'PM';
    }
    else {
        session.innerHTML = 'AM';
    }

    if (hours > 12) {
        hours = hours - 12;
    }

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('seconds').innerHTML = seconds;
}


setInterval(showTime, 10);



