import characters from '../basic/CharacterPull.js'
import showKeys, { setRotation } from './RemoteCharacterController.js'
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
    }

    if (msg.data.rotation) {
        setRotation(players[msg.peerId], msg.data.rotation)
    }

    move(players[msg.peerId], msg.data.position)

    if (msg.data.keys) {
        showKeys(players[msg.peerId], msg.data.keys)
    }
}
let setCharacter = (t, sc) => {
    character = t
    scene = sc
}
export default expawner
export { setCharacter }