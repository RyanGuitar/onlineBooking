import {
  addToId,
  addClick,
  importPage,
  saveSelectedTable,
  addHeadClass,
  addToIdImage,
  removeHeadClass,
  clearIdInner,
  setHeader,
  addToIdWithClick,
} from "../scripts/helpers.js";
import venueDetailsTemplate from "../templates/venueDetails.js";

const venue = window.venue[0];
async function venueDetails() {
  clearIdInner(["dateBox", "headerGameBox"])
  setHeader("facilities.jpg", "Select A Game")
  addToId("headerCenter", `<button class="headerBtn" id="back">Back</button>`);
  addClick("back", () => importPage("selectVenue"));
  removeHeadClass("dateBox", "dateBox");
  
  const template = `
    <div id="buttonBox"></div>
    <div id="venueDetails"></div>`;
    
  addToId("AppContent", template);
  addToIdWithClick("buttonBox", `<button id="mapBtn" class="contentBtn">Google Map</button>`, addMap)
  addToId("venueDetails", venueDetailsTemplate());
  addClick("tableBox", saveSelectedTable);
}

function addMap() {
  const mapHTML = `<div id="mapBox">
                    <img src="images/map.jpg" alt="google map" style="width: 100%; height: 100%; object-fit: cover">
                    <button class="headerBtn" id="backMapBtn">Back</button>
                  </div>`;

  addToId("venueDetails", mapHTML);
  addClick("backMapBtn", addGames);
}

function addGames() {
  addToId("venueDetails", venueDetailsTemplate());
  addClick("tableBox", saveSelectedTable);
}

export default venueDetails;