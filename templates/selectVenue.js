function selectVenueTemplate() {
  const selectVenueHTML = `
   <div id="screen">
      <div id="header">
        <img
          src="images/location.jpg"
          style="width: 100%; height: 100%; object-fit: cover"
          id="headerImage"
        />
        <div id="headerText">Select A Venue</div>
        <div id="headerLogoBox"></div>
        <div id="headerCenter"></div>
      </div>
      <div id="selectVenue"></div>
    </div>`;

  return selectVenueHTML;
}

export default selectVenueTemplate;
