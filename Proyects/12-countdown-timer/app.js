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

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const timeItems = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2023, 12, 25, 0, 20, 0, 30);

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

const month = months[futureDate.getMonth()];

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `givaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}`;

// future time in ms
const futureTime = futureDate.getTime();

getRemainingTime = () => {
  const today = new Date().getTime();
  const t = futureTime - today;
  // values in ms
  // a day
  const singleDay = 24 * 60 * 60 * 1000;
  // an hour
  const singleHour = 60 * 60 * 1000;
  // a minute
  const singleMinute = 60 * 1000;
  // a second
  const singleSecond = 1000;

  // calculate all values
  let day = Math.floor(t / singleDay);
  let hour = Math.floor((t % singleDay) / singleHour);
  let minute = Math.floor((t % singleHour) / singleMinute);
  let second = Math.floor((t % singleMinute) / singleSecond);

  // set values arrays
  const values = [day, hour, minute, second];

  format = (item) => {
    if (item < 10) {
      return (item = `0${item}`);
    } else {
      return item;
    }
  };

  timeItems.forEach((item, index) => (item.innerHTML = format(values[index])));

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">This item has been already dropped</h4>`;
  }
};
// countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
