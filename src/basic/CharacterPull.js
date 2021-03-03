import fileList from "../models/SwordAndShield/FileList.js";

const loader = new THREE.FBXLoader();

let DB = {}

let createDb = () => {
    for (let index = 0; index < 2; index++) {
        create('player-' + index)
    }
}
setTimeout(() => {
    for (let index = 0; index < 2; index++) {
        create('player-delayed-' + index)
    }
}, 1000*5);

let create = (name) => {
    loader.load('src/models/SwordAndShield/' + fileList[0], function (object) {
        object.position.set(-2, 0, 0)
        object.rotation.y = Math.PI
        let s = 0.02
        object.scale.set(s, s, s)
        object.name = name
        object.free = true
        DB[object.uuid] = object
    })

}

let createObjByName = (peerId) => {
    let free = Object.keys(DB).filter(obj => DB[obj].free)
    if (free.length == 0) {
        console.log("NO HAY MAS PREFAV", DB);
        return null
    }
    DB[free[0]].free = false
    DB[free[0]].name = peerId
    return DB[free[0]]
}


let deleteObject = (obj) => {
    let element = Object.keys(DB).filter(element => DB[element].name == obj.name)
    if (element.length == 1) {
        DB[element].free = true
        DB[element].position.set(0, -10, 0)
    }
}
let getObjByName = (name) => {
    let element = Object.keys(DB).filter(element => DB[element].name == name)
    if (element.length == 1) {
        return DB[element]
    }
}
let characters = {
    createObjByName,
    getObjByName,
    deleteObject
}
createDb()
export default characters