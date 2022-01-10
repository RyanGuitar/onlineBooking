import {
  addToId,
  addClick,
  importPage,
  getId
} from "./scripts/helpers.js";

window.addEventListener('load', () => {
  getId("view").style.height = `${window.innerHeight}px`
})
window.addEventListener('resize', () => {
  getId("view").style.height = `${window.innerHeight}px`
});

const landingHTML = `
  <div id="buttonBox">
    <button id="signInBtn" class="contentBtn">Sign In</button>
  </div>`;

addToId("AppContent", landingHTML);
addClick("signInBtn", () => importPage("selectVenue"));