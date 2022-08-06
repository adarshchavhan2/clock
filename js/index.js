function clock() {
  // Gethering Date & Time
  const date = new Date();
  let hrs = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();

  // Checking AM or PM
  let isDay = hrs > 12 ? "PM" : "AM";
  // Converting 24hrs to 12hrs clock
  hrs = hrs > 12 ? hrs - 12 : hrs;

  // Adding 0 if day & time is < 10
  hrs = hrs < 10 ? "0" + hrs : hrs;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  day = day < 10 ? "0" + day : day;

  // Converting to Month to Name
  arrMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Auguest",
    "Septamber",
    "Octomber",
    "November",
    "December",
  ];
  month = arrMonth[month];

  // Digital Clock
  document.querySelector(
    ".digital-clock"
  ).innerHTML = `${hrs} : ${min} : ${sec} <span>${isDay}</span>
        <div class="day">${day} ${month} ${year}</div>`;

  // Anolog Clock
  let rCount = 360 / 60;

  // rotate sec line
  sec = rCount * sec;
  document.querySelector(".lineSec").style.transform = `rotate(${sec}deg)`;
  //rotate min line
  min = rCount * min;
  document.querySelector(".lineMin").style.transform = `rotate(${min}deg)`;
  //rotate hrs line
  rCount = 360 / 10;
  hrs = rCount * hrs;
  document.querySelector(".lineHrs").style.transform = `rotate(${hrs}deg)`;
}
setInterval(clock, 1000);
