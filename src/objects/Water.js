const groundMat = new THREE.MeshStandardMaterial({
    color: 0x067ADA  ,
    opacity: 0.6,
    transparent: true
})
// groundMat.color.setHSL(113, .76, 0.48);
groundMat.color.set(0x054A83);
const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(256, 256, 10, 10),
    groundMat
);

plane.castShadow = false;
plane.receiveShadow = true;
plane.rotation.x = -Math.PI / 2;
plane.position.y = -6.5
plane.position.x = -200
plane.position.z = -200

export default plane