import { months } from "../data/dates.js";
import { enableButton, disableButton } from "../scripts/helpers.js";

let date = {};
let first = true;

function getStartMonth() {
  const start = new Date(date.getFullYear(), date.getMonth());
  return start.getDay();
}

function getEndMonth() {
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return daysInMonth.getDate();
}

function getTheDay(dateArray) {
  if (dateArray) {
    let [year, month] = dateArray;
    date = new Date(year, month);
  } else {
    date = new Date();
  }
  const theDay = {
    year: date.getFullYear(),
    month: months[date.getMonth()],
    today: date.getDate(),
    monthNumber: date.getMonth(),
    startMonth: getStartMonth(),
    daysInMonth: getEndMonth(),
  };
  if (first) {
    window.today = date.getDate();
    window.monthYear = {
      check: `${theDay.month} ${theDay.year}`,
    };
    first = false;
  }
  window.theDay = theDay;
  return theDay;
}

function checkIfSameMonth() {
  if (window.dateUsed == window.todaysDate) {
    disableButton("dateBack");
  }
  if (window.dateUsed != window.todaysDate) {
    enableButton("dateBack");
  }
}

export { getTheDay, checkIfSameMonth };
