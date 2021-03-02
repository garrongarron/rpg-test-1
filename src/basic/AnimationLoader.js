import fileList from "../models/SwordAndShield/FileList.js";


let animations = []
let promises = []
let ready = false
let loader = new THREE.FBXLoader();

let loadAnimations = (callback) => {
    let animFrecuentlyUsed = [26, 35, 36, 49, 48, 50, 51, 17, 41, 10, 52, 26]
    for (let index = 1; index < fileList.length; index++) {
        if (!animFrecuentlyUsed.includes(index)) continue
        promises[index] = new Promise((resolve, reject) => {
            loader.load('src/models/SwordAndShield/' + fileList[index], function (object) {
                animations[index] = object.animations[0]
                resolve(index)
            })
        })
    }

    Promise.all(promises).then(()=>{
        ready = true
    })

    console.log('start loading animations');
}

loadAnimations()

let getAnimations = () =>{
    if(!ready) return null
    return animations
}
export default getAnimations