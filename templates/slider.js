function SliderTemplate() {
  const sliderHTML = `
  <div id="screen">
  <div id="header">
    <img
      src="images/time.jpg"
      style="width: 100%; height: 100%; object-fit: cover"
      id="headerImage"
    />
    <div id="headerText">Pick A Time</div>
    <div id="dateBox"></div>
    <div id="headerLogoBox"></div>
    <div id="headerGameBox"></div>
    <div id="headerCenter"></div>
  </div>
  <div id="pickATime">
    <div class="scrollmenu slider">        
      <div class="tableTimes" id="timePicker">
        <div class="sliderImgBox" style="width:10%;" data-time="9:00">09:00</div>
        <div class="sliderImgBox" style="width:10%;" data-time="10:00">10:00</div>
        <div class="sliderImgBox x-emerald booked" style="width:10%;" data-time="11:00">Booked</div>
        <div class="sliderImgBox x-emerald booked" style="width:10%;" data-time="12:00">Booked</div>
        <div class="sliderImgBox" style="width:10%;" data-time="13:00">13:00</div>
        <div class="sliderImgBox" style="width:10%;" data-time="14:00">14:00</div>
        <div class="sliderImgBox" style="width:10%;" data-time="15:00">15:00</div>
        <div class="sliderImgBox" style="width:10%;" data-time="16:00">16:00</div>
        <div class="sliderImgBox" style="width:10%;" data-time="17:00">17:00</div>
        <div class="sliderImgBox x-emerald booked" style="width:10%;" data-time="12:00">Booked</div>
        <div class="sliderImgBox" style="width:10%;" data-time="19:00">19:00</div>
        <div class="sliderImgBox" style="width:10%;" data-time="20:00">20:00</div>
        <div class="sliderImgBox" style="width:10%;" data-time="21:00">21:00</div>
        <div class="sliderImgBox" style="width:10%;" data-time="22:00">22:00</div>
        <div class="sliderImgBox" style="width:10%;" data-time="23:00">23:00</div>
      </div>
    </div>
  </div>
</div>`;

  return sliderHTML;
}

export default SliderTemplate;
