function switchPage(pageNumber) {
  switch(pageNumber) {
    case 1:
      $('#container').html(carouselPage1())
      return true;
    case 2:
      initCube()
      return true;
    default:
      return carouselPage1();
  }
}

function carouselPage1 () {
  return (
    `<div id="carouselExample" class="carousel slide" data-interval="false">
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">

          <h1>Welcome to my interactive Demo.</h1>
          <p>Make sure to enable your webcam</p>
          <p>Your webcam will track anything that is the color magenta</p>

          <p>&#8678; Swipe left or right with your magenta color to see some cool t-shirts from Pastelae.com &#8680;</p>
          <p></p>
          <p> Swipe down to see another cool thing that you can spin</p>
          <pre style="color: white;">&#8681;   &#8681;   &#8681;</pre>

        </div>
        <div class="carousel-item">
          <img class="d-block img-fluid" src="img/tshirtFront.png" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block img-fluid" src="img/tshirtBack.png" alt="Third slide">
        </div>

        <div class="carousel-item">
          <img class="d-block img-fluid" src="img/tshirt2Front.png" alt="Third slide">
        </div>
        <div class="carousel-item">
          <img class="d-block img-fluid" src="img/tshirt2Back.png" alt="Third slide">
        </div>

        <div class="carousel-item">
          <img class="d-block img-fluid" src="img/tshirt3Front.png" alt="Third slide">
        </div>
        <div class="carousel-item">
          <img class="d-block img-fluid" src="img/tshirt3Back.png" alt="Third slide">
        </div>

      </div>`
  )
}
//
// function cubePage2 () {
//   return (
//     `<p>Cube Page</p>`
//   )
// }
