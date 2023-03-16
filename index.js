setInterval(()=>{
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let hourRotation = (30*hour) + (minute/2);
    let minuteRotation = 6 * minute;
    let secondRotation = 6 * second;

    let h = document.getElementById("hour");

    let m = document.getElementById("minute");

    let s = document.getElementById("second");


    h.style.transform = `rotate(${hourRotation}deg)`
    m.style.transform = `rotate(${minuteRotation}deg)`
    s.style.transform = `rotate(${secondRotation}deg)`
},1000)
/*Rotation maths(hour):
12 hour = 360 degree
1 hour = 360/12 degree
       = 30 degree
For h hour rotation will  be - 30*h hour
For extraa rotation due to minutes will be - 30h + m/2 -----(from 1), because
60 minutes = 30 degree
1 minute = 30/60 degree
         = 1/2 degree
m minutes = m/2 degree ------------- (1)   
For extraa rotation due to seconds will be negligible (so not considered)

Rotation maths(minutes):
60 minutes = 360 degree
1 minute = 360/60 degree
         = 6 degree
m minutes = 6 * m degree  
For extraa rotation due to seconds will be negligible (so not considered)

Rotation maths(seconds):
60 seconds = 360 degree
1 second = 6 degree
s seconds = 6 * s degree */
