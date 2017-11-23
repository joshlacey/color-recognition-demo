
window.onload = function() {
  var video = document.getElementById('video'),
      tracker = new tracking.ColorTracker(['magenta']),
      LRpositions = [],
      TBpositions = [],
      currentPage = 1,
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

  switchPage(currentPage)

  function swipeScreenRL() {
    console.log("swiped Right to Left")
    if(currentPage === 1){
      $('.carousel').carousel('next')
    } else if (currentPage === 2) {
      animate(.2)
    }
    LRpositions = []
  }

  function swipeScreenLR() {
    console.log("swiped Left to Right")
    if(currentPage === 1) {
      $('.carousel').carousel('prev')
    } else if (currentPage === 2) {
      animate(-.2)
    }
    LRpositions = []
  }

  function swipeScreenTB() {
    console.log("swiped Top to Bottom")
    TBpositions=[]
    if (currentPage === 2) {
      return null
    }
    currentPage++
    switchPage(currentPage)
  }

  function swipeScreenBT() {
    console.log("swiped Bottom to Top")
    TBpositions=[]
    if (currentPage === 1){
      return null
    }
    --currentPage
    switchPage(currentPage)
  }

  //this loop constantly checks for swiping actions
  //actions are triggered if x or y values stored in an array differ at the beginning and end by 200
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
    //after 1000 milliseconds reset the position arrays are reset so that differing can be decently accurate
    if ((Date.now() - timeNow) > 1000) {
      LRpositions = []
      TBpositions = []
      timeNow = Date.now()
    }
    requestAnimationFrame(loop)
  })()
}
