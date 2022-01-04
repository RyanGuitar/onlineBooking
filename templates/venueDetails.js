function venueDetailsTemplate() {
  const venueDetailsHTML = `
    <div id="screen">
    <div id="header">
      <img
        src="images/facilities.jpg"
        style="width: 100%; height: 100%; object-fit: cover"
        id="headerImage"
        alt="facilities image"
      />
      <div id="headerText">Select a Game</div>
      <div id="headerLogoBox"></div>
      <div id="headerGameBox"></div>
      <div id="headerCenter"></div>
    </div>
    <div id="googleMap">
      <button class="btn x-emerald xlarge" id="mapLocation">Google Map</button>
    </div>
    <div id="venueDetails">
      <div class="row" id="tableBox">
        <div class="col s3 tables">
          <img src="images/snooker.jpg" alt="snooker" id="snooker" style="width: 100%; height: 100%; object-fit: cover">
        </div>
        <div class="col s3 tables dart">
          <img src="images/darts.jpg" alt="pool" id="darts" style="width: 70%; height: 100%; object-fit: cover">
        </div>
        <div class="col s3 tables">
          <img src="images/pool.jpg" alt="snooker" id="pool" style="width: 100%; height: 100%; object-fit: cover">
        </div>
      </div>
    </div>
  </div>`;

  return venueDetailsHTML;
}

export default venueDetailsTemplate;
