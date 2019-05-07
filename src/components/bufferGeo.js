import * as THREE from "three";

export default function({ scene, camera, renderer }) {
  const count = 500;
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  geo.addAttribute("position", new THREE.BufferAttribute(positions, 3));

  const drawCount = 4;
  geo.setDrawRange(0, drawCount);

  const ma = new THREE.LineBasicMaterial({
    color: "#0000FF",
    linewidth: 20
  });

  const line = new THREE.Line(geo, ma);
  scene.add(line);

  const pos = line.geometry.attributes.position.array;

  let x, y, z, index;
  x = y = z = index = 0;

  for (let i = 0, l = count; i < l; i++) {
    pos[index++] = x;
    pos[index++] = y;
    pos[index++] = z;

    x += (Math.random() - 0.5) * 30;
    y += (Math.random() - 0.5) * 30;
    z += (Math.random() - 0.5) * 30;

    line.geometry.setDrawRange(0, i);
  }

  camera.position.z = 500;
  renderer.render(scene, camera);
}
