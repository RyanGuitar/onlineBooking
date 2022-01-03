import { addToId, addClick, dateClicked } from "../scripts/helpers.js";
import { getTheDay, checkIfSameMonth } from "../scripts/calendar.js";
import calendar from "../templates/calendar.js";
import selectDateTemplate from "../templates/selectDate.js";

function selectADate() {
  const calendarHTML = calendar();
  const selectDateHTML = selectDateTemplate();

  addToId("AppContent", selectDateHTML);
  addToId("selectADate", calendarHTML);
  addToId("dateBox", `${window.theDay.month} ${window.theDay.year}`);
  addToId(
    "headerLogoBox",
    `<img src=${window.venue[0].image} alt=${window.venue[0].image} style="aspect-ratio:530/350;width:100%;height:100%;object-fit:cover;">`
  );
  addToId(
    "headerGameBox",
    `<img src="images/${window.selectedTable}.jpg" alt="snooker" id="snooker" style="width: 100%; height: 100%; object-fit: cover">`
  );
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
