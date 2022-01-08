import {
  addToId,
  addClick,
  dateClicked,
  addToIdImage,
  addHeadClass,
  importPage,
  removeHeadClass,
} from "../scripts/helpers.js";
import { getTheDay, checkIfSameMonth } from "../scripts/calendar.js";
import calendar from "../templates/calendar.js";


function selectADate() {
  getTheDay();
  const calendarHTML = calendar();
  addToId("preTimeBox", "");
  removeHeadClass("preTimeBox", "timeSelected");
  removeHeadClass("headerCenter", "headerCenter");
  addHeadClass("headerCenter", "headerCenterUp");
  const selectDateHTML = `<div id="selectADate"></div>`;
  addToIdImage("headerImage", "calendar.jpg");
  addToId("headerText", "Select A Date");
  addToId("headerCenter", '<button class="headerBtn" id="back">Back</button>');
  addClick("back", () => importPage("venueDetails"));
  addToId("AppContent", selectDateHTML);
  addToId("selectADate", calendarHTML);
  addToId("dateBox", `${window.theDay.month} ${window.theDay.year}`);
  addHeadClass("dateBox", "dateBox");
  addClick("dateBack", () => reloadCalendar(-1));
  addClick("dateForward", () => reloadCalendar(1));
  addClick("calendar", dateClicked);
}

function reloadCalendar(x) {
  let month = window.theDay.monthNumber;
  getTheDay([window.theDay.year, (month += x)]);
  const calendarTemplate = calendar();
  addToId("selectADate", calendarTemplate);
  addClick("dateBack", () => reloadCalendar(-1));
  addClick("dateForward", () => reloadCalendar(1));
  addToId("dateBox", `${window.theDay.month} ${window.theDay.year}`);
  addClick("calendar", dateClicked);
  checkIfSameMonth();
}

export default selectADate;
