import {
  addToId,
  addClick,
  importPage,
  addToIdImage,
  addHeadClass,
  removeHeadClass,
  setHeader,
} from "../scripts/helpers.js";
import SliderTemplate from "../templates/slider.js";

function pickTime() {
  setHeader("time.jpg", "Select A Time")
  addToId("AppContent", SliderTemplate());
  addClick("timePicker", checkPickedTime);
  addToId("headerCenter", '<button class="headerBtn" id="back">Back</button>');
  addClick("back", () => importPage("selectDate"));
}

let timePickArray = [];
window.times = [];

function checkTimePicked() {
  timePickArray = [];
  window.times = [];
  const timePicked = document.getElementById("timePicker").children;
  for (let i = 0; i < timePicked.length; i++) {
    if (timePicked[i].classList[1] == "dateClick") {
      window.times.push(timePicked[i].textContent);
      timePickArray.push("true");
      displayTimeClicked();
    }
  }
  if (timePickArray.length) {
    return;
  }
  addToId("headerCenter", `<button class="headerBtn" id="back">Back</button>`);
  displayTimeClicked();
  removeHeadClass("preTimeBox", "timeSelected");
  addClick("back", () => importPage("selectDate"));
}

function checkPickedTime(e) {
  if (
    !e.target.className.includes("x-") &&
    !e.target.className.includes("dateClick") &&
    e.target.dataset.time
  ) {
    e.target.classList.add("dateClick");
    addToId(
      "headerCenter",
      `<button class="headerBtn" id="back">Back</button><button class="headerBtn" id="confirm">Confirm Booking</button>`
    );
    addClick("back", () => importPage("selectDate"));
    addClick("confirm", () => importPage("success"));
  } else if (e.target.className.includes("dateClick")) {
    e.target.textContent = e.target.dataset.time;
    e.target.classList.remove("dateClick");
  } else {
    return;
  }
  checkTimePicked();
}

function displayTimeClicked() {
  let times = "";
  if (window.times.length == 1) {
    addToId("preTimeBox", window.times[0]);
  } else {
    window.times.map((time) => {
      times += `<div>${time}</div>`;
    });
    addToId("preTimeBox", times);
  }
  addHeadClass("preTimeBox", "timeSelected");
}

export default pickTime;