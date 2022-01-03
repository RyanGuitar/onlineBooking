function getId(id) {
  return document.getElementById(id);
}

function addClick(id, fn) {
  getId(id).addEventListener("click", fn);
}

function addToId(id, add) {
  getId(id).innerHTML = add;
}

async function importPage(page) {
  const getPage = await import(`../pages/${page}.js`);
  getPage.default();
}

function enableButton(id) {
  getId(id).disabled = false;
}

function disableButton(id) {
  getId(id).disabled = true;
}

function addToIdImage(id, url) {
  getId(id).src = `images/${url}`;
}

function addClass(id) {
  getId(id).classList.add("x-emerald");
}

function clearClicks() {
  const clear = document.querySelectorAll(".dates");
  clear.forEach((btn) => {
    btn.classList.remove("x-emerald");
  });
}

function dateClicked(e) {
  clearClicks();
  window.fullDate = `${e.target.id} ${window.theDay.month} ${window.theDay.year}`;
  if (e.target.tagName == "BUTTON") {
    addToId("dateBox", window.fullDate);
    addToId(
      "headerCenter",
      `<button class="btn" id="continue">Continue</button>`
    );
    addClick("continue", () => importPage("pickTime"));
    addClass(e.target.id);
  }
}

function saveSelectedTable(e) {
  if (e.target.tagName == "IMG") {
    window.selectedTable = e.target.id;
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

function checkClick(e) {
  if (e.target.tagName == "IMG") {
    window.venue = window.venues.filter((venue) => {
      return venue.id == e.target.id;
    });
    if (window.venue !== 0) {
      addToId(
        "headerCenter",
        '<button class="btn" id="headerConfirm">Continue</button>'
      );
      addClick("headerConfirm", () => importPage("venueDetails"));
      addToId(
        "headerLogoBox",
        `<img src=${window.venue[0].image} alt=${window.venue[0].image} style="aspect-ratio:530/350;width:100%;height:100%;object-fit:cover;">`
      );
    }
  }
}

export {
  getId,
  addToId,
  addClick,
  importPage,
  enableButton,
  disableButton,
  addToIdImage,
  addClass,
  clearClicks,
  dateClicked,
  saveSelectedTable,
  checkClick,
};
