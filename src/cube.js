var camera, renderer, scene;
//init();



function initCube() {
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  $('#container').html('')
  $('#container').append(renderer.domElement)
  //document.body.appendChild(renderer.domElement)
  camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, .1, 1000)
  camera.position.y = -50
  camera.position.z = 50
  camera.rotation.x = .7
  scene = new THREE.Scene()
  scene.background = new THREE.Color( 0xF6C4D3 );

  // var geometry = new THREE.PlaneGeometry( 200, 200 );
  // var material = new THREE.MeshBasicMaterial( {color: 'grey', side: THREE.DoubleSide} );
  // var plane = new THREE.Mesh( geometry, material );
  // plane.position.z = -50
  // scene.add( plane );

  var geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
  var material = new THREE.MeshLambertMaterial( { color: 0x96c7bc } );
  cube = new THREE.Mesh(geometry, material)

  var light = new THREE.DirectionalLight('white', 1)
  var ambLight = new THREE.AmbientLight( 0xb9b1b8 );
  light.position.set(0,-100,100).normalize()
  scene.add(light)
  scene.add(ambLight)
  scene.add(cube)
  window.addEventListener('resize', onWindowResize, false)
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
