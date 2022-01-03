import {
  addToId,
  addClick,
  importPage,
  saveSelectedTable,
} from "../scripts/helpers.js";
import venueDetailsTemplate from "../templates/venueDetails.js";
const venue = window.venue[0];
async function venueDetails() {
  const venueDetailsHTML = venueDetailsTemplate();

  addToId("AppContent", venueDetailsHTML);
  addToId("headerCenter", "");
  addToId(
    "headerLogoBox",
    `<img src=${window.venue[0].image} alt=${window.venue[0].image} style="aspect-ratio:530/350;width:100%;height:100%;object-fit:cover;">`
  );
  addToId("headerCenter", `<button class="btn" id="back">Back</button>`);
  addClick("back", () => importPage("selectVenue"));
  addClick("mapLocation", addMap);
  addClick("tableBox", saveSelectedTable);

  if (window.selectedTable) {
    addToId(
      "headerGameBox",
      `<img src="images/${window.selectedTable}.jpg" alt="snooker" id="snooker" style="width: 100%; height: 100%; object-fit: cover">`
    );
    addToId(
      "headerCenter",
      `<button class="btn" id="back">Back</button><button class="btn" id="continue">Continue</button>`
    );
    addClick("back", () => importPage("selectVenue"));
    addClick("continue", () => importPage("selectDate"));
  }
}

function addMap() {
  const mapHTML = `<div id="mapBox">
                    <img src="images/map.jpg" alt="google map" style="width: 100%; height: 100%; object-fit: cover">
                    <button class="x-emerald btn" id="backMapBtn">Back</button>
                  </div>`;

  addToId("AppContent", mapHTML);
  addClick("backMapBtn", venueDetails);
}

export default venueDetails;
