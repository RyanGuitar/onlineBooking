function venueDetailsTemplate() {
  const venueDetailsHTML = `
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
    </div>`;

  return venueDetailsHTML;
}

export default venueDetailsTemplate;
