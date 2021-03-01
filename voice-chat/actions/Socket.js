let socket = { conn: null }

let initConnection = () => {
    return new Promise((resolve, reject) => {
        socket.conn = io('https://voice-chat-rpg.herokuapp.com/')
        socket.conn.on('connect', function () {
            resolve()
        });
    })
}

export default socket
export { initConnection }
