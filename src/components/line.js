import * as THREE from "three";

export default function({ scene, camera, renderer }) {
  const material = new THREE.LineBasicMaterial({
    color: "#0000ff"
  });
  const geometry = new THREE.Geometry();

  geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
  geometry.vertices.push(new THREE.Vector3(0, 10, 0));
  geometry.vertices.push(new THREE.Vector3(10, 0, 0));

  const line = new THREE.Line(geometry, material);

  scene.add(line);
  camera.lookAt( 0, 0, 0 );
  camera.position.z = 100;

  // function animate() {
    // requestAnimationFrame(animate);
    renderer.render(scene, camera);
  // }
  // animate();
}
