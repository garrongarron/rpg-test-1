const groundMat = new THREE.MeshStandardMaterial({
    color: 0x067ADA  ,
    opacity: 0.2,
    transparent: true
})
// groundMat.color.setHSL(113, .76, 0.48);
groundMat.color.set(0x0B8570 );
const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1000, 1000, 10, 10),
    groundMat
);

plane.castShadow = false;
plane.receiveShadow = true;
plane.rotation.x = -Math.PI / 2;
plane.position.y = -6.5

export default plane