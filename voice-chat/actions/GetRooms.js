import setUsers, { hideRooms }from '../ui/ShowLobby.js'
import socket from './Socket.js'

let interval = null
let getRooms = () => { 
    socket.conn.emit('get-rooms', '')
    interval = setInterval(() => {
        socket.conn.emit('get-rooms', '')
    }, 2000);
    socket.conn.on('available-rooms', data => {
        setUsers(data)
    })
}

let stopRoomRequests = () => {
    clearInterval(interval)
    hideRooms()
}

export default getRooms
export { stopRoomRequests }