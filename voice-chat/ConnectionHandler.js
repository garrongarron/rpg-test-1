import expawner from '../src/controllers/Spawner.js';
import getPeer from './Peer.js'
import characters from '../src/basic/CharacterPull.js'

let connector = {}

let output = (dataObj) => {
    expawner(dataObj)
}

let handleConnection = (conn, comming) => {
    connector[conn.peer] = { 'conn': conn }
    conn.on('open', function () {
        conn.on('data', function (data) {
            output({
                peerId: conn.peer,
                data: data
            })
        });
    })
    conn.on('close', function () {
        let someone = characters.getObjByName(conn.peer)
        someone.position.y += 2
        characters.deleteObject(someone)
        delete connector[conn.peer]
    });
}

let receiveConnection = () => {
    let peer = getPeer()
    peer.on('connection', function (conn) {
        handleConnection(conn, true)
    })
}

let connectWith = (peerId) => {
    let peer = getPeer()
    let conn = peer.connect(peerId);
    handleConnection(conn, false)
    let n = 0
}

let getConnector = () => {
    return connector
}
export default receiveConnection
export { connectWith, getConnector }