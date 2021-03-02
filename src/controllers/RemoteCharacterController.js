import { getDelta } from '../basic/Clock.js'

let callbacks = {}

let speed = 10

let showKeys = (character, keys) => {
    if (keys[0] == 87 && keys[1] == true) {
        callbacks[character.name + 87] = (n) => {
            character.position.x += Math.sin(character.rotation.y) * speed * n
            character.position.z += Math.cos(character.rotation.y) * speed * n
        }
    }
    if (keys[0] == 87 && keys[1] == false) {
        delete callbacks[character.name + 87]
    }

    if (keys[0] == 83 && keys[1] == true) {
        callbacks[character.name + 83] = (n) => {
            character.position.x -= Math.sin(character.rotation.y) * speed * n
            character.position.z -= Math.cos(character.rotation.y) * speed * n
        }
    }
    if (keys[0] == 83 && keys[1] == false) {
        delete callbacks[character.name + 83]
    }

}
let setRotation = (character, rotation) => {
    character.rotation.y = rotation
}

setInterval(() => {
    let n = getDelta()
    Object.keys(callbacks).map(cb => {
        callbacks[cb](n)
        console.log('adelante');
    })
}, 100);



export default showKeys
export { setRotation }
