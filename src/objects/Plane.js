const groundMat = new THREE.MeshStandardMaterial({
    color: 0x666666,
})
// groundMat.color.setHSL(113, .76, 0.48);
groundMat.color.set(0x005500);
const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1000, 1000, 10, 10),
    groundMat
);

plane.castShadow = false;
plane.receiveShadow = true;
plane.rotation.x = -Math.PI / 2;

export default plane