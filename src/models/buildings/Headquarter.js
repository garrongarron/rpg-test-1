let file = 'src/models/buildings/crusader_headquarter.FBX'

const loader = new THREE.FBXLoader();

let loadHeadquarter = (scene) => {
    loader.load(file, function (object) {
        object.position.set(130, -6, 140)
        object.rotation.y = -180 * Math.PI / 180
        let s = 0.02
        object.scale.set(s, s, s)
        object.traverse(function (child) {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
        object.receiveShadow = true
        scene.add(object)
    })
}

export default loadHeadquarter