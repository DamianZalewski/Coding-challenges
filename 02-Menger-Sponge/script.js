const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry(3,3,3);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
let position = new THREE.Vector3( 100, 1, 0 );
cube.position = position;
scene.add( cube );

camera.position.z = 5;

const animate = function () {
    requestAnimationFrame( animate );
    cube.position.x = 1; //to do
    scene.rotation.x += 0.01;
    scene.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();