import { getTheDay } from "../scripts/calendar.js";

getTheDay();

function calendar() {
  let { daysInMonth, year, month, startMonth } = window.theDay;

  let calendarHTML = `<div id ="calendarInnerBox">
                        <div id="calendar">
                        
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
      calendarHTML += `<div class="passedDate" style="border:1px solid gray">${i}</div>`;
    } else {
      calendarHTML +=
        i == window.today && window.dateUsed == window.todaysDate
          ? `<div style="border:none"><button class="today dates" style="width:100%;height:100%;outline:none;border:none" id="${i}">${i}</button></div>`
          : `<div class="dates"><button class="dates" style="height:100%;width:100%;outline:none;border:none" id="${i}">${i}</button></div>`;
    }
  }

  calendarHTML += `</div>
                      <div id="calendarBtnBox" class="container row">
                        <button id="dateBack" class="x-emerald calNav" disabled="true"><</button>
                        <button id="dateForward" class="x-emerald calNav">></button>
                      </div>
                  </div>`;

  return calendarHTML;
}

export default calendar;
