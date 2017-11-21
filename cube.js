var camera, renderer, scene;
init();



function init() {
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
  camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, .1, 1000)
  camera.position.y = -400
  camera.position.z = 400
  camera.rotation.x = .7
  scene = new THREE.Scene()

  THREE.ImageUtils.crossOrigin = ''
  var texture = THREE.ImageUtils.loadTexture('https://metrouk2.files.wordpress.com/2017/07/187144066.jpg?w=748&h=498&crop=1')
  var cubeMaterial = new THREE.MeshFaceMaterial([
          new THREE.MeshBasicMaterial({
              color: 'red' //left
          }),
          new THREE.MeshBasicMaterial({
              color: 'orange' //right
          }),
          new THREE.MeshBasicMaterial({

              color: 'green' // top
          }),
          new THREE.MeshBasicMaterial({
              color:'blue' // bottom
          }),
          new THREE.MeshBasicMaterial({
              color: 'pink' // front
          }),
          new THREE.MeshBasicMaterial({
              color: 'yellow' //back
          })
      ]);


  cube = new THREE.Mesh(new THREE.CubeGeometry(200,200,200), cubeMaterial)
  light = new THREE.DirectionalLight('white', 1)
  light.position.set(0,-400,400).normalize()
  scene.add(light)
  scene.add(cube)
  window.addEventListener('resize', onWindowResize, false)
  render()
}

  function onWindowResize() {
    camera.aspect = window.innerWidth/window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  function render() {
    renderer.render( scene, camera )
  }
