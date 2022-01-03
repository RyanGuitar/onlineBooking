import { addToId, addClick, checkClick } from "./onlineBooking/scripts/helpers.js";
import { venues } from "./onlineBooking/data/venuesData.js";
import selectVenueTemplate from "./onlineBooking/templates/selectVenue.js";

function selectVenue() {
  window.venues = venues;
  const template = selectVenueTemplate();
  addToId("AppContent", template);

  let selectVenueHTML = ``;

  venues.map((venue) => {
    selectVenueHTML += `
      <div class="logoBox">
        <img src=${venue.image} id=${venue.id} style="aspect-ratio:530/350;width:100%;height:100%;object-fit:cover;" class="logo">
      </div>`;
  });

  addToId("selectVenue", selectVenueHTML);
  addClick("selectVenue", checkClick);
}

export default selectVenue;