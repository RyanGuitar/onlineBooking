import { addToId, addClick } from "../scripts/helpers.js";

function success() {
  const successHTML = `<div id="screen">
    <div id="header">
      <img
        src="images/finished.jpeg"
        style="width: 100%; height: 100%; object-fit: cover"
        id="headerImage"
        alt="finished image"
      />
      <div id="headerText">Booking Successful</div>
    </div>
    <div id="landing">
      <div id="buttonBox">
        <button id="exit" class="btn">Exit</button>
      </div>
    </div>
  </div>`;

  addToId("AppContent", successHTML);
  addClick("exit", () => closeWindow());
}

function closeWindow() {
  const new_window = open(location, '_self');

  new_window.close();

  return false;
}

export default success;
