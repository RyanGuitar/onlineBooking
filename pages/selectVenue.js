import {
  addToId,
  addClick,
  checkClick,
  addToIdImage,
  removeHeadClass,
  addHeadClass,
  clearIdInner,
  setHeader,
  addToIdWithClick,
} from "../scripts/helpers.js";
import { venues } from "../data/venuesData.js";

function selectVenue() {
  window.venues = venues;
  clearIdInner(["headerLogoBox", "headerGameBox", "headerCenter"])
 // removeHeadClass("headerLogoBox", "headerBorder");
  setHeader("location.jpg", "Select A Venue")
  addToId("AppContent", `<div id="selectVenue"></div>`);

  let selectVenueHTML = ``;
  
  venues.map((venue) => {
    selectVenueHTML += `
    <div class="logoBox">
      <img src=${venue.image} id=${venue.id} alt="logo" style="aspect-ratio:530/350;width:100%;height:100%;object-fit:cover;">
    </div>`;
  });

  addToIdWithClick("selectVenue", selectVenueHTML, checkClick)
}

export default selectVenue;