import { addToId, addClick, importPage } from "./scripts/helpers.js";


const landingHTML = `
  <div id="buttonBox">
    <button id="signInBtn" class="contentBtn">Sign In</button>
  </div>`;

addToId("AppContent", landingHTML);
addClick("signInBtn", () => importPage("selectVenue"));