import { getCharacter } from '../basic/Character.js'
import { getConnector } from '../../voice-chat/ConnectionHandler.js'

let character, connector
let t1 = 0

let ready = false


t1 = setInterval(() => {
    let connections = Object.keys(getConnector()).length
    if (getCharacter() && connections != 0) {
        character = getCharacter()
        connector = getConnector()
        console.log('Listo para enviar mensajes');
        ready = true
        clearInterval(t1)
    }
}, 2 * 1000);

let sendKey = (keyBuffer) =>{
    if(!ready) return
    let msg = {
        position: {
            x: character.position.x,
            y: character.position.y,
            z: character.position.z
        },
        keys: keyBuffer
    }
    Object.keys(connector).map(key =>
        connector[key].conn.send(msg)
    )
}

let sendAngle = (rotationBuffer) =>{
    if(!ready) return
    let msg = {
        position: {
            x: character.position.x,
            y: character.position.y,
            z: character.position.z
        },
        rotation:rotationBuffer
    }
    Object.keys(connector).map(key =>
        connector[key].conn.send(msg)
    )
}
export {sendKey, sendAngle}