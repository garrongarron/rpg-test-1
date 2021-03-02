import GenericCharacterController from './GenericCharacterController.js'
import getAnimations from '../basic/AnimationLoader.js'
let externalPlayer = {}

let externalInputProcess = (peerId, data) => {
    if (data.keys) {
        externalPlayer[peerId].update({
            key: data.keys
        })
    }

    if (data.angle) {
        externalPlayer[peerId].update({
            angle: data.angle
        })
    }
}

let addAnimations = (player) => {
    player.animations = getAnimations().map(anim=>anim)
    externalPlayer[player.name] = new GenericCharacterController(player)
}

export default externalInputProcess
export { addAnimations }