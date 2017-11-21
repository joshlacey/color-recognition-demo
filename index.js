var video = document.getElementById('video'),
    glasses = new Image(),
    canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

var glassesOptions = ['img/glasses.png', 'img/ninties-dude.png', 'img/pointed-round.png'], totalCalls = 0;
    currentOption = 0;

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

if(navigator.getUserMedia) {
  navigator.getUserMedia({video:true}, handleVideo, handleError)
}

function changeGlassesLeft() {
  if (currentOption === 0) {
    currentOption = glassesOptions.length - 1
  } else {
    --currentOption
  }
}

function changeGlassesRight() {
  if (currentOption === glassesOptions.length - 1) {
    currentOption = 0
  } else {
    currentOption ++
  }
}

function handleVideo(stream) {
  video.src = window.URL.createObjectURL(stream)
}

function handleError(e) {
    alert(e)
}

function html5glasses() {
  glasses.src = glassesOptions[currentOption]
  ctx.drawImage(video, 0, 0, video.width, video.height, 0, 0, canvas.width, canvas.height)
  var comp = ccv.detect_objects({'canvas': (ccv.pre(canvas)), 'cascade': cascade, 'interval': 5, 'min_neighbors': 1})
  for (var i = 0; i < comp.length; i++) {
    totalCalls++
    ctx.drawImage(glasses, comp[i].x, comp[i].y, comp[i].width, comp[i].height)
  }
  console.log('html5glasses called', glasses.src, glasses, totalCalls)
}

video.addEventListener('play', function() {
    vidInterval = setInterval(html5glasses, 200)
})

video.addEventListener('ended', function() {
    clearInterval(vidInterval)
})
