function getId(id) {
  return document.getElementById(id);
}

function addToId(id, add) {
  getId(id).innerHTML = add;
}

function addClick(id, fn) {
  getId(id).addEventListener("click", fn);
}

async function importPage(page) {
  //const getPage = await import(`https://ryanguitar.github.io/onlineBooking/pages/${page}.js`);
  const getPage = await import(`../pages/${page}.js`);
  console.log(getPage)
  getPage.default();
}

const landingHTML = `
   <div id="screen">
      <div id="header">
        <img
          src="images/landing.jpeg"
          style="width: 100%; height: 100%; object-fit: cover"
          id="headerImage"
          alt="landing image"
        />
        <div id="headerText">Online Booking Website</div>
      </div>
      <div id="landing">
        <div id="buttonBox">
          <button id="signInBtn" class="btn">Sign In</button>
        </div>
      </div>
    </div>`;

addToId("AppContent", landingHTML);
addClick("signInBtn", () => importPage("selectVenue"));
