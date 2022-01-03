function selectDateTemplate() {
  const selectDateHTML = `
    <div id="screen">
      <div id="header">
        <img
          src="images/calendar.jpg"
          style="width: 100%; height: 100%; object-fit: cover"
          id="headerImage"
        />
        <div id="headerText">Select A Date</div>
        <div id="dateBox"></div>
        <div id="headerLogoBox"></div>
        <div id="headerGameBox"></div>
        <div id="headerCenter"></div>
      </div>
        <div id="selectADate"></div>
    </div>`;

  return selectDateHTML;
}

export default selectDateTemplate;
