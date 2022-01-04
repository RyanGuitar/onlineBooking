function selectDateTemplate() {
  const selectDateHTML = `
    <div id="screen">
      <div id="header">
        <img
          src="images/calendar.jpg"
          style="width: 100%; height: 100%; object-fit: cover"
          id="headerImage"
          alt="calendar image"
        />
        <div id="headerText">Select A Date</div>
        <div id="headerLogoBox" class="headerBorder"></div>
        <div id="headerGameBox" class="headerBorder"></div>
        <div id="headerCenter"></div>
        <div id="dateBox"></div>
      </div>
        <div id="selectADate"></div>
    </div>`;

  return selectDateHTML;
}

export default selectDateTemplate;
