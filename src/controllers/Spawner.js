import characters from '../basic/CharacterPull.js'
import externalInputProcess, { addAnimations } from './ExternalInputProcess.js'

let character = null
let players = {}
let scene = null
const loader = new THREE.FBXLoader();
let move = (model, position) => {
    // console.log(model.position);
    model.position.set(
        position.x,
        position.y,
        position.z,
    )
}

let expawner = (msg) => {
    if (character == null) return

    if (!players[msg.peerId]) {
        players[msg.peerId] = characters.createObjByName(msg.peerId)
        scene.add(players[msg.peerId])
        addAnimations(players[msg.peerId])
    }
    
    externalInputProcess(msg.peerId, msg.data)
}

let setCharacter = (t, sc) => {
    character = t
    scene = sc
}
export default expawner
export { setCharacter }