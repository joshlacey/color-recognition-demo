
window.onload = function() {
  console.log(tracking)
  var video = document.getElementById('video'),
      // canvas = document.getElementById('canvas'),
      // context = canvas.getContext('2d'),
      tracker = new tracking.ColorTracker(['magenta']);

  var positions = [0]
  var timeNow = Date.now()

  tracking.track('#video', tracker, { camera: true })

  tracker.on('track', function(event) {
    event.data.forEach(function(rect) {
     if (rect.color === 'magenta') {
        positions.push(rect.x)
        console.log(positions[positions.length-1] - positions[0])
      }
    })
  })

  //add Animate function to swipe.

  function swipeScreenRL() {
    console.log("swiped Right to Left")
    positions = []
  }

  function swipeScreenLR() {
    console.log("swiped Left to Right")
    positions = []
  }

  (function loop() {
    if(positions[positions.length-1] - positions[0] > 200) {
      swipeScreenRL()
    } else if(positions[positions.length-1] - positions[0] < -200) {
      swipeScreenLR()
    }
    if ((Date.now() - timeNow) > 1000) {
      positions = []
      timeNow = Date.now()
    }
    requestAnimationFrame(loop)
  })()
}
