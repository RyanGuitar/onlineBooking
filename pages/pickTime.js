import { addToId, addClick, importPage } from "../scripts/helpers.js";
import SliderTemplate from "../templates/slider.js";

function pickTime() {
  addToId("AppContent", SliderTemplate());
  addClick("timePicker", checkPickedTime);
  addToId(
    "headerLogoBox",
    `<img src=${window.venue[0].image} alt=${window.venue[0].image} style="aspect-ratio:530/350;width:100%;height:100%;object-fit:cover;">`
  );
  addToId(
    "headerGameBox",
    `<img src="images/${window.selectedTable}.jpg" alt="snooker" id="snooker" style="width: 100%; height: 100%; object-fit: cover">`
  );
  addToId("dateBox", window.fullDate);
}

const times = [];

function checkPickedTime(e) {
  if (
    !e.target.className.includes("x-") &&
    !e.target.className.includes("dateClick") &&
    e.target.dataset.time
  ) {
    e.target.classList.add("dateClick");
    addToId(
      "headerCenter",
      `<button class="x-emerald btn" id="confirm">Confirm Booking</button>`
    );
    addClick("confirm", () => importPage("success"));
    times.push(e.target.dataset.time);
  } else if (e.target.className.includes("dateClick")) {
    e.target.textContent = e.target.dataset.time;
    e.target.classList.remove("dateClick");
  } else {
    return;
  }
}

export default pickTime;
