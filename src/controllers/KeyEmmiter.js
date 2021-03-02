import { sendKey } from '../controllers/Broadcast.js'

let memory = new Map()
let out = (data) => {
    sendKey(data)
    // console.log(data, 'aaa');
}
let keysAllowed = [16, 32, 69, 87, 83]
let keyCaster = (data) => {

    if (!keysAllowed.includes(data[0])) return
    if (!memory.has(data[0])) {
        memory.set(data[0], data[1])
        out(data)
    } else {
        if (memory.get(data[0]) == data[1]) return
        else {
            memory.set(data[0], data[1])
            out(data)
        }
    }
}
let getKetMemory = () => {
    return memory
}

export default keyCaster
export { getKetMemory }