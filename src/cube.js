var camera, renderer, scene;

function initCube() {
  //create renderer
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)

  //clear body and append domElement for cube
  $('#container').html('')
  $('#container').append(renderer.domElement)

  //create camera
  camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, .1, 1000)
  camera.position.y = -50
  camera.position.z = 50
  camera.rotation.x = .7

  //create scene
  scene = new THREE.Scene()
  scene.background = new THREE.Color( 0xF6C4D3 );

  //create Torus calling it cube though cause that's what it was named before, might change later
  var geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
  var material = new THREE.MeshLambertMaterial( { color: 0x96c7bc } );
  cube = new THREE.Mesh(geometry, material)

  //create lights, DirectionalLight is the light that creates shadows, AmbientLight makes the shadows less harsh
  var light = new THREE.DirectionalLight('white', 1)
  var ambLight = new THREE.AmbientLight( 0xa8a0a7 );
  light.position.set(0,-100,100).normalize()

  //add everything to the scene
  scene.add(light)
  scene.add(ambLight)
  scene.add(cube)

  //add event listener incase the window gets resized. saw this in a demo and it seemed nice to include.
  window.addEventListener('resize', onWindowResize, false)
  //render the scene
  render()
}

  function onWindowResize() {
    camera.aspect = window.innerWidth/window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  function animate(step) {
    var timer = 30
    innerLoop()
    function innerLoop() {
      console.log("looping", timer)
      cube.rotation.y += step
      --timer
      render()
      if(timer > 0) {
        requestAnimationFrame(innerLoop)
      }
    }
  }

  function render() {
    renderer.render( scene, camera )
  }
