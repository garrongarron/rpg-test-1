import GenericCHaracterController from './GenericCharacterController.js'
import getPaladinPromise from '../basic/MainCharacter.js'

let controller = null

getPaladinPromise().then(p => {
    controller = new GenericCHaracterController(p)
})


let localKeyProcess = (keys) => {
    if (controller == null) return
    controller.update({
        key: keys
    })
}

let localAngleProcess = (angle) =>{
    if (controller == null) return
    controller.update({
        angle: angle
    })
}
export default localKeyProcess
export { localAngleProcess }