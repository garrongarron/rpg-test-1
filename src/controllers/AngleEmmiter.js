import { sendAngle } from '../controllers/Broadcast.js'
import { getKetMemory } from './KeyEmmiter.js'

let angleMemory = null

let out = (angleMemory) => {
    sendAngle(angleMemory)
    // console.log(angleMemory, "uwu");
}

let checkAngle = (angle) => {
    if (angle == angleMemory) return
    angleMemory = angle

    let keyMemory = getKetMemory()
    if (keyMemory.has(87) && keyMemory.get(87)) {
        out(angleMemory)
    }
    if (keyMemory.has(83) && keyMemory.get(83)) {
        out(angleMemory)
    }
}
export default checkAngle
