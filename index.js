
window.onload = function() {
  var video = document.getElementById('video'),
      tracker = new tracking.ColorTracker(['magenta']),
      LRpositions = [],
      TBpositions = [],
      timeNow = Date.now();

  tracking.track('#video', tracker, { camera: true })

  tracker.on('track', function(event) {
    event.data.forEach(function(rect) {
     if (rect.color === 'magenta') {
        LRpositions.push(rect.x)
        TBpositions.push(rect.y)
      }
    })
  })

  function swipeScreenRL() {
    console.log("swiped Right to Left")
    $('.carousel').carousel('next')
    LRpositions = []
  }

  function swipeScreenLR() {
    console.log("swiped Left to Right")
    $('.carousel').carousel('prev')
    LRpositions = []
  }

  function swipeScreenTB() {
    console.log("swiped Top to Bottom")
    TBpositions=[]
  }

  function swipeScreenBT() {
    console.log("swiped Bottom to Top")
    TBpositions=[]
  }

  (function loop() {
    if(LRpositions[LRpositions.length-1] - LRpositions[0] > 200) {
      swipeScreenRL()
    } else if(LRpositions[LRpositions.length-1] - LRpositions[0] < -200) {
      swipeScreenLR()
    } else if(TBpositions[TBpositions.length-1] - TBpositions[0] > 200) {
      swipeScreenTB()
    } else if(TBpositions[TBpositions.length-1] - TBpositions[0] < -200) {
      swipeScreenBT()
    }
    if ((Date.now() - timeNow) > 1000) {
      LRpositions = []
      TBpositions = []
      timeNow = Date.now()
    }
    requestAnimationFrame(loop)
  })()
}
