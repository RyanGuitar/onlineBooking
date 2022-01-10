function venueDetailsTemplate() {
  const venueDetailsHTML = `
    <div id="tableBox">
      <div class="tables">
        <img src="images/snooker.webp" alt="snooker" id="snooker" style="width: 100%; height: 100%; object-fit: cover">
      </div>
      <div class="tables">
        <img src="images/darts.webp" alt="darts" id="darts" class="darts" style="width:60%; height: 60%; object-fit: cover">
      </div>
      <div class="tables">
        <img src="images/pool.webp" alt="snooker" id="pool" style="width: 100%; height: 100%; object-fit: cover">
      </div>
    </div>`;

  return venueDetailsHTML;
}

export default venueDetailsTemplate;
