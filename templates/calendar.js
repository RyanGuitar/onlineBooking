import { getTheDay } from "../scripts/calendar.js";

getTheDay();

function calendar() {
  let { daysInMonth, year, month, startMonth } = window.theDay;

  let calendarHTML = `<div id ="calendarInnerBox" class="row container">
                        <div id="calendar" class="col s11">
                          <div id="weekDays">
                            <div data-day="Sunday">S</div>
                            <div data-day="Monday">M</div>
                            <div data-day="Tuesday">T</div>
                            <div data-day="Wednesday">W</div>
                            <div data-day="Thursday">T</div>
                            <div data-day="Friday">F</div>
                            <div data-day="Saterday">S</div>
                          </div>
                          <div id="monthDays">`;

  for (let i = 0; i < startMonth; i++) {
    calendarHTML += `<div class="noBorder"></div>`;
  }

  window.dateUsed = `${month} ${year}`;
  window.todaysDate = `${window.monthYear.check}`;

  for (let i = 1; i <= daysInMonth; i++) {
    if (i < window.today && window.dateUsed == window.todaysDate) {
      calendarHTML += `<div class="x-olive opacity">${i}</div>`;
    } else {
      calendarHTML +=
        i == window.today && window.dateUsed == window.todaysDate
          ? `<div><button class="btn x-emerald block x-emerald-hover" style="width:100%;height:100%" id=${i}>${i}</button></div>`
          : `<div><button class="btn block x-emerald-hover dates" style="height:100%;width:100%" id=${i}>${i}</button></div>`;
    }
  }

  calendarHTML += `</div>
                    </div>
                        <div id="calendarBtnBox" class="container row">
                          <button id="dateBack" class="x-emerald btn col s4" disabled="true"><b><</b></button>
                          <button id="dateForward" class="x-emerald btn col s4"><b>></b></button>
                        </div>
                      </div>`;

  return calendarHTML;
}

export default calendar;
