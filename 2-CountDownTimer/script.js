const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


const newYears = '1 Jan 2023';

function countdown(){
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const oneMinute = 60;
  const oneHour = 60*60;
  const oneDay = 24*60*60;

  const totalSecond = (newYearsDate-currentDate)/1000;
  const days = Math.floor(totalSecond/oneDay);
  const hours = Math.floor((totalSecond%oneDay)/oneHour);
  const mins = Math.floor((totalSecond%oneHour)/oneMinute);
  const seconds = Math.floor(totalSecond%oneMinute);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown,1000);