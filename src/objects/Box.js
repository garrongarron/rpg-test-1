const box = new THREE.Mesh(
    new THREE.BoxGeometry(2, 3, 2),
    new THREE.MeshStandardMaterial({
        color: 0xFFD700,
    }));
let s = 1 / 0.02
s = 1
box.scale.set(s, s, s)
box.position.set(5, -4 * s, 5);
box.castShadow = true;
box.receiveShadow = true;
box.name = 'box'


let cubeContainer = new THREE.Box3();
cubeContainer.setFromObject(box);



export default box
export { cubeContainer }