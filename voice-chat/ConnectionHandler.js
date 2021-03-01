import getPeer from './Peer.js'

let connector = {}

let output = (dataObj) => {
    console.log(dataObj);
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
    // let n= 0
    // setInterval(() => {
    //     if(connector[peerId]){
    //         conn.send('Hello! '+n);
    //     } else {
    //         console.log('no jet');
    //     }
    // }, 2000);
}


export default receiveConnection
export { connectWith }