let file = 'src/models/buildings/tent_b.FBX?'+(new Date()).getTime()

const loader = new THREE.FBXLoader(); 

let loadTendB = (scene) => {
    loader.load(file, function (object) {
        object.position.set(100, -7.5, 40)
        // object.position.set(0, 2,0)
        object.rotation.y = -180 * Math.PI / 180
        let s = 0.02
        object.scale.set(s, s, s)
        object.traverse(function (child) {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
        object.castShadow = true;
        object.receiveShadow = true; //default
        object.name = "Tend_A"
        scene.add(object)
    })
}

export default loadTendB