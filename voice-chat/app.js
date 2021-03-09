import login from './ui/Login.js'
import socketForm from './ui/SocketConnection.js'
import socket, { initConnection as socketConnection } from './actions/Socket.js'
import getNewRoomBtn from './ui/NewRoomBtn.js'
import getRooms, { stopRoomRequests } from './actions/GetRooms.js'
import room, { getCancelBtn } from './ui/Room.js'
import { hideRooms, addCallbacks as clickOnRoom } from './ui/ShowLobby.js'
import mySelf from './MySelf.js'
import getPeerId from './actions/GetPeerId.js'
import setId from './ui/ShowId.js'
import populate from './UserList.js'
import checkAudio from './AudioChecking.js'
import setName from './WhoAmI.js'
import showLogoutBtn from './ui/Logout.js'
import setRoom from './MyRoom.js'
import receiveConnection from './ConnectionHandler.js'
import keyListener from '../src/basic/KeyListener.js'

let run = () => {
    // return
    clickOnRoom((li) => {
        li.addEventListener('click', (e) => {
            console.log('Room selected ' + li.innerText);
            roomSelected(li.innerText)
            hideRooms()
            stopRoomRequests()
            setRoom()
        })
    })



    let loginCallback = (value) => {
        mySelf.username = value
        localStorage.setItem('name', mySelf.username)
        setName(mySelf.username)
        login.hide()
        socketForm.show()
        showLogoutBtn()
    }

    login.setCallback(loginCallback)
    let name = localStorage.getItem('name')
    if (!name) {
        login.show()
    } else {
        loginCallback(name)
    }
    console.log('login');



    socketForm.setCallback(() => {
        try {
            socketConnection().then(() => {
                console.log('status socket.io connection ok')

                ////////////////////////////////////
                getPeerId().then(id => {
                    console.log('when succes', id);
                    mySelf.id = id
                    setId(id)
                    setSocketIOListener()
                    getRooms(socket)
                    checkAudio()
                    receiveConnection()
                }).catch(e => {
                    console.log('fails', e);
                })

            }).fail(() => console.log('status connection fail'))
        } catch (error) {
            console.log('Attemping connection to soket.io server');
        }
        socketForm.hide()
    })

    let setSocketIOListener = () => {
        socket.conn.on('welcome', data => {
            populate(data, 'welcome')
        })
        socket.conn.on('user-connected', data => {
            populate(data, 'user-connected')
        })
        socket.conn.on('user-disconnected', data => {
            populate(data)
        })

    }

    let newRoom = getNewRoomBtn()
    newRoom.addEventListener('click', () => {
        room.show()
        hideRooms()
        stopRoomRequests()
        room.setCallback((roomName) => {
            //clear the arrow
            let arrow = document.querySelector('.arrow-container')
            arrow.classList.add('hide')
            console.log('Room  ' + roomName);//todo
            roomSelected(roomName)
            room.hide()
            setRoom()
            hideRooms()

            //show the keys
            document.querySelector('.keys-to-move').classList.remove('hide')
            keyListener.start()
        })
    })

    let cancel = getCancelBtn()
    cancel.addEventListener('click', () => {
        getRooms(socket)
        room.hide()
    })




    let roomSelected = (roomName) => {
        mySelf.room = roomName
        socket.conn.emit('join-room', mySelf.room, mySelf.id, mySelf.username)
        // console.log(mySelf);
    }

}

export default run