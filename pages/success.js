import {
  addToId,
  addClick,
  addToIdImage,
  removeHeadClass,
  getId,
  addHeadClass,
  setHeader,
  clearIdInner,
} from "../scripts/helpers.js";

function success() {
  setHeader("finished.jpeg", "Booking Successful")
  clearIdInner(["preTimeBox", "dateBox"])
  removeHeadClass("preTimeBox", "timeSelected");
  getId("headerCenter").remove();
  removeHeadClass("dateBox", "dateBox");
  addToId("finalDate", `<div>${window.fullDate}</div>`);
  addHeadClass("finalDate", "finalDate");
  let times = "";
  if (window.times.length == 1) {
    addToId("timeBox", window.times[0]);
  } else {
    window.times.map((time) => {
      times += `<div>${time}</div>`;
    });
    addToId("timeBox", times);
  }
  removeHeadClass("timeBox", "timeSelected");
  addHeadClass("timeBox", "timeBox");

  const successHTML = `
    <div id="buttonBox">
      <button id="exit" class="contentBtn">Exit</button>
    </div>`;

  addToId("AppContent", successHTML);
  addClick("exit", () => closeWindow());
}

function closeWindow() {
  const new_window = open(location, "_self");
  new_window.close();
  return false;
}

export default success;