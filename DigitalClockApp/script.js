let hrs = document.getElementById('hrs');
let mins = document.getElementById('min');
let secs = document.getElementById('sec');


setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours()<10?'0':'') + currentTime.getHours();
    mins.innerHTML = (currentTime.getMinutes()<10?'0':'') + currentTime.getMinutes();
    secs.innerHTML = (currentTime.getSeconds()<10?'0':'') + currentTime.getSeconds();
}, 1000);