const setTime = ()=> {
    const time = new Date();
    let hour = putZero(time.getHours());
    let minutes = putZero(time.getMinutes());
    let seconds = putZero(time.getSeconds());
    document.querySelector(".clock_hours").textContent = hour;
    document.querySelector(".clock_minutes").textContent = minutes;
    document.querySelector(".clock_seconds").textContent = seconds;
}

const putZero = n => {
    if (n.toString().length < 2) return "0".concat(n);
    return n;
}

setTime();

setInterval(() => {
   setTime(); 
}, 1000);