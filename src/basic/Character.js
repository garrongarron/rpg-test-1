import fileList from "../models/SwordAndShield/FileList.js";

let mixer;
let character;
const clock = new THREE.Clock();
let delta;
let animations = []
let model
let promises = []
const loader = new THREE.FBXLoader();

let loadCharacter = (scene, callback) => {


    let setData = (object) => {
        object.name = "Paladin"
        object.position.set(-2, 0, 0)
        object.rotation.y = Math.PI
        let s = 0.02
        object.scale.set(s, s, s)
        scene.add(object)
        model = object
        callback(object)
    }

    
        loader.load('src/models/SwordAndShield/' + fileList[0], function (object) {
            setData(object)
            character = object
        })
    
}

let processAnim = (callback) => {
    let load = (character) => {
        // mixer = new THREE.AnimationMixer(character);
        character.animations = animations
        character.traverse(function (child) {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
        console.log('end');
        callback()
    }

    Promise.all(promises).then((a) => {
        load(model)
    })
}

let loadAnimations = (callback) => {
    let animFrecuentlyUsed = [0, 26, 35, 36, 49, 48, 50, 51, 17, 41, 10, 52, 26]
    for (let index = 1; index < fileList.length; index++) {
        if(!animFrecuentlyUsed.includes(index)) continue
        promises[index] = new Promise((resolve, reject) => {
            loader.load('src/models/SwordAndShield/' + fileList[index], function (object) {
                animations[index] = object.animations[0]
                resolve(index)
            })
        })
    }
    console.log('start');
    processAnim(callback)
}

let getCharacter = () =>{
    return character
}

export default loadCharacter
export { getCharacter, loadAnimations }