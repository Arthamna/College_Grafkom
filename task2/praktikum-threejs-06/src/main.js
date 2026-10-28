import './style.css'
import * as THREE from "three";

// we'll make gl equivalent syntaks here :

const scene = new THREE.Scene();

// background = gl.clearColor()
scene.background = new THREE.Color(0x0b1020);

// viewport
const sizes = {
  width : window.innerWidth,
  height : window.innerHeight
}

// camera :
// viewing frustum
const camera = new THREE.PerspectiveCamera(
  60, sizes.width / sizes.height , 0.1 , 100
);

camera.position.set( 4,3,6 );
camera.lookAt( 0,0.5,0 );


// renderer 
const renderer = new THREE.WebGLRenderer({antialias : true});

// renderer.render(camera);
// or ..
// scene.add(camera);

// sizing
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// add canvas to page
const app = document.getElementById( "app" );
app.appendChild(renderer.domElement);

// box geometry 
const cubeGeometry = new THREE.BoxGeometry(1,1,1);

console.log(cubeGeometry);
console.log(cubeGeometry.attributes);

//
const basicMaterial = new THREE.MeshBasicMaterial({color: 0x00aaff});

// combine shape, geometry + material = mesh
const cube = new THREE.Mesh(cubeGeometry, basicMaterial);

// // add and render
scene.add(cube);
renderer.render(scene, camera);

