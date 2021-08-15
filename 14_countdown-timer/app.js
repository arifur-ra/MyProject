const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
const endCourse = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items =document.querySelectorAll('.deadline-format h4')

let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDay()



  let futureDate = new Date(2021,11,31,16,30,0)
// console.log(futureDate)

// let  futureDate = new Date(tempYear, tempMonth, tempDay + 10, 16,30,0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();    
const mins = futureDate.getMinutes();

let month = futureDate.getMonth();
month=months[month]
const date =futureDate.getDate()

const weekday = weekdays[futureDate.getDay()]

endCourse.innerHTML=` on ${weekday}, ${date} ${month} ${year} || ${hours}:${mins}`



// future time in ms

const futureTime = futureDate.getTime()

const getRemainingTime = ()=>{
        const today = new Date().getTime()
        const restTime = futureTime-today;
        // 1s == 1000ms
        // 1m = 60s
        // 1hr =60 min
        //1d = 24hr

        // values in ms 
        const oneDay = 24*60*60*1000;
        const oneHour = 60*60*1000;
        const oneMinute = 60*1000;

        // calculate all values

        let days = restTime/ oneDay;
        days = Math.floor(days)

        // get hours
        let hours = (restTime % oneDay) / oneHour;
        hours = Math.floor(hours)
        // get minutes
        let minutes = (restTime % oneHour) / oneMinute;
        minutes = Math.floor(minutes)
        // get second
        let seconds = (restTime % oneMinute) / 1000;
        seconds = Math.floor(seconds)

        // set values an array
        const values = [days, hours, minutes, seconds]

        // format if 0ne digit is then should show two digit like 01,02,03,...09

        const format = (item) =>{
            if(item < 10 ){
            return (item = `0${item}`);
            }
            return item;
        }

        items.forEach((item, index)=>{
        item.innerHTML =format(values[index])
        })


        // if the countdown lees then 0 time
        if(restTime < 0){
            clearInterval(countdown);
            deadline.innerHTML = ` <h4 class ="expired"> The Course  already Finished . I am a Full Stack Developer Now. Yaahoo!!!!</h4>`
        }

}

let countdown = setInterval(getRemainingTime,1000);
getRemainingTime()

// countdown and show the seconds works

