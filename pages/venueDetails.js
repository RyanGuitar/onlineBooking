import {
  addToId,
  addClick,
  importPage,
  saveSelectedTable,
  addHeadClass,
  addToIdImage,
  removeHeadClass,
} from "../scripts/helpers.js";
import venueDetailsTemplate from "../templates/venueDetails.js";

const venue = window.venue[0];
async function venueDetails() {
  removeHeadClass("headerLogoBox", "headerLogoBoxUp");
  removeHeadClass("headerGameBox", "headerBorder");
  removeHeadClass("headerCenter", "headerCenterUp");
  addHeadClass("headerCenter", "headerCenter");
  addToIdImage("headerImage", "facilities.jpg");
  addToId("headerCenter", `<button class="headerBtn" id="back">Back</button>`);
  addToId("headerText", "Select A Game");
  addToId("dateBox", "");
  addToId("headerGameBox", "");
  removeHeadClass("dateBox", "dateBox");
  addClick("back", () => importPage("selectVenue"));
  const template = `
    <div id="buttonBox"></div>
    <div id="venueDetails"></div>`;
  addToId("AppContent", template);
  addToId(
    "buttonBox",
    `<button id="mapBtn" class="contentBtn">Google Map</button>`
  );
  addClick("mapBtn", addMap);
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
