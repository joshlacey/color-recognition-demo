// const express = require('express');
// const app = express();
//
//
// app.use('/static', express.static('static'));
// app.all('*', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });
//
// app.listen(process.env.PORT || 3000);

window.onload = function() {
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
    cube.rotation.y += 500
    render()
    console.log("rotation", cube.rotation.y)
    positions = []
  }

  function swipeScreenLR() {
    console.log("swiped Left to Right")
    cube.rotation.y -= 500
    render()
    console.log("rotation", cube.rotation.y)

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
