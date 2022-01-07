import {
  addToId,
  addClick,
  checkClick,
  addToIdImage,
  removeHeadClass,
  addHeadClass,
} from "../scripts/helpers.js";
import { venues } from "../data/venuesData.js";

function selectVenue() {
  window.venues = venues;
  addToId("headerLogoBox", "");
  addHeadClass("headerCenter", "headerCenter");
  removeHeadClass("headerLogoBox", "headerLogoBoxUp");
  removeHeadClass("headerLogoBox", "headerBorder");
  addToId("headerGameBox", "");
  removeHeadClass("headerGameBox", "headerBorder");
  addToId("headerCenter", "");
  addToIdImage("headerImage", "location.jpg");
  addToId("headerText", "Select A Venue");
  addToId("AppContent", `<div id="selectVenue"></div>`);

  let selectVenueHTML = ``;

  venues.map((venue) => {
    selectVenueHTML += `
    <div class="logoBox">
      <img src=${venue.image} id=${venue.id} alt="logo" style="aspect-ratio:530/350;width:100%;height:100%;object-fit:cover;">
    </div>`;
  });

  addToId("selectVenue", selectVenueHTML);
  addClick("selectVenue", checkClick);
}

export default selectVenue;
